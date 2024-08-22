
# StoryForge API

StoryForge is a blogging platform API that allows users to create, read, update, and delete blog posts, as well as interact through comments.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Running the Server](#running-the-server)
5. [API Documentation](#api-documentation)
7. [Deployment](#deployment)
8. [Contributing](#contributing)
9. [License](#license)
1. [Contact me](#contact-information)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm (usually comes with Node.js)
- MongoDB (v4.4 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/storyforge-api.git
   cd storyforge-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory:
   ```
   touch .env
   ```

2. Add the following environment variables to the `.env` file:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/storyforge
   JWT_SECRET=your_jwt_secret_key
   BLOG_CLIENT_URL=http://localhost:3000
   ```
   Replace the values with your specific configuration.

## Running the Server

1. Start the server in development mode:
   ```
   npm run dev
   ```

2. For production:
   ```
   npm start
   ```

The server should now be running on `http://localhost:5000` (or the port you specified).

## API Documentation

API documentation is available via Swagger UI. After starting the server, visit:

```
http://localhost:5000/api-docs
```

This interactive documentation allows you to explore and test all API endpoints.

## Deployment

### Deploying to Vercel

1. Install the Vercel CLI:
   ```
   npm i -g vercel
   ```

2. Login to Vercel:
   ```
   vercel login
   ```

3. Deploy the project:
   ```
   vercel
   ```

4. For subsequent deployments:
   ```
   vercel --prod
   ```

### Vercel Configuration

Ensure your `vercel.json` file in the root directory contains:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/server.js"
    }
  ]
}
```

### Environment Variables

Set up environment variables in your Vercel project settings, mirroring those in your local `.env` file.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact Information

For any questions, suggestions, or inquiries about this project, please feel free to contact the developer:

- **Name:** Mahesh Langote
- **Email:** maheshlangote779@gmail.com
- **Portfolio:** [https://www.maheshlangote.online](https://www.maheshlangote.online)

Don't hesitate to reach out if you need any assistance or have feedback about the StoryForge API!

---
