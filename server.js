const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, '.')));

// Proxy middleware
app.use('/api', createProxyMiddleware({
    target: 'http://localhost:11434',
    changeOrigin: true,
}));

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});