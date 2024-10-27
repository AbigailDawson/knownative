const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);
console.log("Heroku MongoDB URI:", process.env.MONGODB_URI);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('MongoDB connection established successfully.');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('MongoDB connection disconnected.');
});