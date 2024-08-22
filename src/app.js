const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cors({
    origin: process.env.BLOG_CLIENT_URL
  }));
app.use('/test-server', (req, res) => {
   res.send("server is on ");
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

module.exports = app;