const express = require('express');
const path = require('path');
const app = express();

// Use the port assigned by Plesk or fallback to available ports
const port = 8080;

// Serve static files from the 'out' directory
app.use(express.static(path.join(__dirname, 'out'), {
  maxAge: '1y',
  etag: true,
  lastModified: true
}));

// Handle client-side routing - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

app.listen(port, () => {
  console.log(`Mella website running on port ${port}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${port} is already in use. Trying port ${port + 1}...`);
    app.listen(port + 1, () => {
      console.log(`Mella website running on port ${port + 1}`);
    });
  } else {
    console.error('Server error:', err);
  }
});