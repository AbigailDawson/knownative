const crypto = require('crypto');

// Generate Secure Random Token (URL-safe)
const generateToken = () => {
    return crypto.randomBytes(32).toString('hex');
};


module.exports = {
    generateToken
};
