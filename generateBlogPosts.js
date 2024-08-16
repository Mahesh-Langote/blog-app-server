const authorId = "66be37cb7c79c742fa0da690";

const blogPosts = [
  {
    "title": "The Future of Artificial Intelligence",
    "content": "Artificial Intelligence is rapidly evolving, transforming various industries. This post explores the potential impact of AI on our daily lives and future job markets.",
    "category": "Technology",
    "author": authorId,
    "comments": []
  },
  {
    "title": "Hidden Gems of Southeast Asia",
    "content": "Discover the lesser-known but breathtaking destinations in Southeast Asia. From secluded beaches to ancient temples, this guide will help you plan your next adventure.",
    "category": "Travel",
    "author": authorId,
    "comments": []
  },
  {
    "title": "Mastering the Art of Sushi Making",
    "content": "Learn the techniques and secrets behind creating perfect sushi at home. This step-by-step guide covers everything from rice preparation to fish selection.",
    "category": "Food",
    "author": authorId,
    "comments": []
  },
  {
    "title": "Minimalism: Living with Less",
    "content": "Explore the benefits of adopting a minimalist lifestyle. This post discusses how decluttering your space can lead to a clearer mind and more fulfilling life.",
    "category": "Lifestyle",
    "author": authorId,
    "comments": []
  },
  {
    "title": "The Rise of Sustainable Fashion",
    "content": "Discover how the fashion industry is embracing sustainability. From eco-friendly materials to ethical production practices, learn how you can make a difference with your wardrobe choices.",
    "category": "Other",
    "author": authorId,
    "comments": []
  },
  {
    "title": "5G Technology: Revolutionizing Connectivity",
    "content": "Dive into the world of 5G and understand how this next-generation network technology is set to transform communication, IoT, and more.",
    "category": "Technology",
    "author": authorId,
    "comments": []
  },
  {
    "title": "Budget Travel Tips for Europe",
    "content": "Planning a European adventure on a tight budget? This post offers practical tips and tricks to make the most of your trip without breaking the bank.",
    "category": "Travel",
    "author": authorId,
    "comments": []
  },
  {
    "title": "The Art of Food Plating",
    "content": "Elevate your culinary skills by mastering the art of food presentation. Learn techniques used by professional chefs to make your dishes look as good as they taste.",
    "category": "Food",
    "author": authorId,
    "comments": []
  },
  {
    "title": "Effective Time Management Strategies",
    "content": "Boost your productivity with these proven time management techniques. From the Pomodoro method to digital tools, find the strategy that works best for you.",
    "category": "Lifestyle",
    "author": authorId,
    "comments": []
  },
  {
    "title": "The Impact of Social Media on Mental Health",
    "content": "Examine the complex relationship between social media use and mental well-being. This post discusses both the positive and negative effects, and offers tips for healthy digital habits.",
    "category": "Other",
    "author": authorId,
    "comments": []
  }
];

// Convert to JSON string
const jsonString = JSON.stringify(blogPosts, null, 2);

// Now you can write this to a file or use it directly
console.log(jsonString);