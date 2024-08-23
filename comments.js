// Create web server
// npm install express
const express = require('express');
const app = express();

// Create route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Create route
app.get('/api/comments', (req, res) => {
    res.send(['comment1', 'comment2', 'comment3']);
});

// Create route
app.get('/api/comments/:id', (req, res) => {
    res.send(req.params.id);
});

// Create route
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});

// Create route
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
});

// Start server
app.listen(3000, () => console.log('Server is running on port 3000...'));

// Run node comments.js
// Open browser and navigate to http://localhost:3000/api/comments
// Open browser and navigate to http://localhost:3000/api/comments/123
// Open browser and navigate to http://localhost:3000/api/posts/2018/1
// Open browser and navigate to http://localhost:3000/api/posts/2018/1?sortBy=name
// Open browser and navigate to http://localhost:3000/api/posts/2018/1?sortBy=name&order=asc
// Open browser and navigate to http://localhost:3000/api/posts/2018/1?sortBy=name&order=asc&filter=1
// Open browser and navigate to http://localhost:3000/api/posts/2018/1?sortBy=name&order=asc&filter=1&filter=2