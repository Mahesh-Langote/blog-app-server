const User = require('../models/User');
const Post = require('../models/Post');

exports.getAllUsers = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, sort = 'name' } = req.query;
    const users = await User.find()
      .select('-password')
      .sort(sort)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await User.countDocuments();

    res.json({
      users,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalUsers: count
    });
  } catch (error) {
    next(error);
  }
};

exports.getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const posts = await Post.find({ author: user._id }).select('title category createdAt');
    
    const comments = await Post.aggregate([
      { $unwind: '$comments' },
      { $match: { 'comments.author': user._id } },
      { $project: { 
        postId: '$_id',
        postTitle: '$title', 
        commentContent: '$comments.content', 
        createdAt: '$comments.createdAt' 
      }}
    ]);

    res.json({
      user,
      posts,
      comments
    });
  } catch (error) {
    next(error);
  }
};

exports.getUserDetails = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const posts = await Post.find({ author: user._id }).select('title category createdAt');
    
    res.json({
      user,
      posts
    });
  } catch (error) {
    next(error);
  }
};