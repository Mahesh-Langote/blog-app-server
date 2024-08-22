
```markdown
# StoryForge API

StoryForge is a blogging platform API built with Node.js, Express, and MongoDB.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Running the Server](#running-the-server) 
5. [Deployment](#deployment)
6. [Contributing](#contributing)
7. [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0.0 or later)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/storyforge-api.git
   cd storyforge-api
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory of the project.

2. Add the following environment variables to the `.env` file:

   ```plaintext
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/storyforge
   JWT_SECRET=your_jwt_secret_here
   BLOG_CLIENT_URL=http://localhost:3000
   ```

   Replace the values with your specific configuration.

## Running the Server

To start the server in development mode:

```bash
npm run dev
```

To start the server in production mode:

```bash
npm start
```

The server will start running on `http://localhost:5000` (or the port you specified in the `.env` file).

## Deployment

### Deploying to Vercel

1. Install the Vercel CLI:

   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:

   ```bash
   vercel login
   ```

3. Deploy the project:

   ```bash
   vercel
   ```

4. For subsequent deployments:

   ```bash
   vercel --prod
   ```

### Vercel Configuration

Ensure your `vercel.json` file in the root directory looks like this:

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

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request
