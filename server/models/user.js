const { Schema: _Schema, model } = require('mongoose');
const Schema = _Schema;
const { hash } = require('bcrypt');

const SALT_ROUNDS = 6

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  avatarImg: { type: String },
  username: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    minLength: 3,
    required: true,
  }
}, { 
  timestamps: true,
  toJSON: { 
    transform: function(doc, ret) { 
      delete ret.password
      return ret
    }
  }
})

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next()
  this.password = await hash(this.password, SALT_ROUNDS)
  return next()
})

module.exports = model('User', userSchema)