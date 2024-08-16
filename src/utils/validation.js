const Joi = require('joi');

exports.validateSignup = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().min(2).max(50),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(30),
  });
  return schema.validate(data);
};

exports.validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};

exports.validatePost = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().min(3).max(100),
    content: Joi.string().required().min(10),
    category: Joi.string().required().valid('Technology', 'Travel', 'Food', 'Lifestyle', 'Other'),
  });
  return schema.validate(data);
};

exports.validateComment = (data) => {
    const schema = Joi.object({
      content: Joi.string().required().min(1).max(500),
    });
    return schema.validate(data);
  };