const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Serve favicon and static files from the build directory
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build'))); 

// Token authentication middleware
app.use(require('../full/config/checkToken'));

// Catch-all route to serve index.html for all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html')); 
});

// Configure to use port 3001 instead of 3000 during development to avoid collision with React's dev server
const port = process.env.PORT || 3002;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
