
# StoryForge API

StoryForge is a blogging platform API that allows users to create, read, update, and delete blog posts, as well as interact through comments.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Running the Server](#running-the-server)
1. [Postman](#Using-Postman-Collection)
1. [API Documentation](#api-documentation)
1. [Deployment](#deployment)
1. [Contributing](#contributing)
1. [License](#license)
1. [Contact me](#contact-information)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm (usually comes with Node.js)
- MongoDB (v4.4 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Mahesh-Langote/blog-app-server.git
   cd blog-app-server
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

## Using Postman Collection

To help you test the API endpoints easily, we've included a Postman collection in the repository.

### Importing the Collection

1. Open Postman.
2. Click on the "Import" button in the top left corner.
3. Choose "File" and select the `postman_collection.json` file from the cloned repository.
4. Click "Import" to add the collection to your Postman workspace.

### Using the Collection

1. Once imported, you'll see a new collection named "Blog API" in your Postman sidebar.
2. Expand the collection to see all available endpoints.
3. Before making requests, set up your environment:
   - Click on the gear icon in the top right and select "Manage Environments"
   - Create a new environment (e.g., "StoryForge Local")
   - Add variables:
     - `baseUrl`: Set to your local server URL (e.g., `http://localhost:5000`)
     - `token`: Leave this empty for now; it will be auto-populated after login

4. Select your newly created environment from the dropdown in the top right corner.

### Authentication

1. Find the "Login" request in the collection.
2. Fill in the request body with valid credentials.
3. Send the request.
4. The response will contain a token. The collection is set up to automatically save this token to your environment variable.

### Testing Endpoints

1. Choose an endpoint you want to test.
2. Ensure you're using the correct HTTP method (GET, POST, PUT, DELETE).
3. The URL should automatically use the `baseUrl` variable.
4. For protected routes, the token will be automatically included in the header.
5. Add any necessary request parameters or body.
6. Click "Send" to make the request.

### Tips

- Use the "Pre-request Script" tab in requests to set up any necessary data or environment variables.
- Check the "Tests" tab to see any automated tests set up for the endpoints.
- You can run the entire collection at once using the Postman Collection Runner for comprehensive API testing.

Remember to keep your Postman collection up-to-date with any changes made to the API.



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
