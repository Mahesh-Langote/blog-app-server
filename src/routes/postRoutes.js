const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  addComment,
  getCategories
} = require('../controllers/postController');
router.get('/categories', getCategories);
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', auth, createPost);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.post('/:id/comments', auth, addComment);

module.exports = router;