const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'out' directory
app.use(express.static(path.join(__dirname, 'out')));

// Handle client-side routing - serve index.html for all routes
app.get('*', (req, res) => {
  // Check if the requested path has a corresponding HTML file
  const requestedPath = req.path;
  
  // Handle specific routes
  if (requestedPath === '/about' || requestedPath === '/about/') {
    res.sendFile(path.join(__dirname, 'out', 'about', 'index.html'));
  } else if (requestedPath === '/contact' || requestedPath === '/contact/') {
    res.sendFile(path.join(__dirname, 'out', 'contact', 'index.html'));
  } else if (requestedPath === '/services' || requestedPath === '/services/') {
    res.sendFile(path.join(__dirname, 'out', 'services', 'index.html'));
  } else {
    // Default to main index.html
    res.sendFile(path.join(__dirname, 'out', 'index.html'));
  }
});

app.listen(port, () => {
  console.log(`Mella website running on port ${port}`);
});