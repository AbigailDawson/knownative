const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

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

// Function to check connection status
function checkConnectionStatus() {
  const status = db.readyState;
  switch (status) {
    case 0:
      console.log('MongoDB is disconnected.');
      break;
    case 1:
      console.log('MongoDB is connected.');
      break;
    case 2:
      console.log('MongoDB is connecting.');
      break;
    case 3:
      console.log('MongoDB is disconnecting.');
      break;
    default:
      console.log('Unknown MongoDB connection status.');
  }
}

// Call the function to check connection status
checkConnectionStatus();