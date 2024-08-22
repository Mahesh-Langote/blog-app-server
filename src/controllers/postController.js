const Post = require('../models/Post');
const {postSchema} = require('../models/Post');
const { validatePost, validateComment } = require('../utils/validation');

 
// exports.getCategories = async (req, res, next) => {
//   try { 
//     const categories = postSchema.path('category').enumValues;
//     res.json(categories);
//   } catch (error) {
//     next(error);
//   }
// };

exports.getCategories = async (req, res, next) => {
  try {
    // Get the schema from the model
    const postSchema = Post.schema;
    
    // Access the enum values from the schema
    const categories = postSchema.path('category').enumValues;
    
    res.json(categories);
  } catch (error) {
    next(error);
  }
};
exports.getAllPosts = async (req, res, next) => {
  try {
    const { 
      sort = '-createdAt', 
      category, 
      search,
      author,
      startDate,
      endDate,
      page = 1, 
      limit = 12 
    } = req.query;

    const query = {};
    let sortOption = {};

    // Handle sorting
    if (sort.startsWith('-')) {
      sortOption[sort.substring(1)] = -1;
    } else {
      sortOption[sort] = 1;
    }

    if (category) {
      query.category = category;
    }

    if (author) {
      query.author = author;
    }

    if (startDate && endDate) {
      query.createdAt = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ];
    }

    const posts = await Post.find(query)
      .sort(sortOption)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('author', 'name email')
      .exec();

    const count = await Post.countDocuments(query);

    // Fetch all predefined categories from the schema
    const allCategories = Post.schema.path('category').enumValues;

    // Prepare sort options for client
    const sortOptionsForClient = [
      { value: '-createdAt', label: 'Newest First' },
      { value: 'createdAt', label: 'Oldest First' },
      { value: 'title', label: 'Title A-Z' },
      { value: '-title', label: 'Title Z-A' }
    ];

    res.json({
      posts,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalPosts: count,
      categories: allCategories,
      sortOptions: sortOptionsForClient
    });
  } catch (error) {
    next(error);
  }
};
exports.getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', '-password') // Populate author details, excluding password
      .populate({
        path: 'comments',
        populate: {
          path: 'author',
          select: '-password' // Populate comment author details, excluding password
        }
      });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (error) {
    next(error);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const { error } = validatePost(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { title, content, category } = req.body;
    const post = new Post({ title, content, category, author: req.user.id });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const { error } = validatePost(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { title, content, category } = req.body;
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this post' });
    }

    post.title = title;
    post.content = content;
    post.category = category;
    await post.save();
    res.json(post);
  } catch (error) {
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this post' });
    }

    await post.remove();
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    next(error);
  }
};

exports.addComment = async (req, res, next) => {
  try {
    const { error } = validateComment(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const comment = {
      content: req.body.content,
      author: req.user.id,
    };

    post.comments.push(comment);
    await post.save();

    const newComment = post.comments[post.comments.length - 1];
    res.status(201).json(newComment);
  } catch (error) {
    next(error);
  }
};