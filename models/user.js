import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;
import { hash } from 'bcrypt';

const SALT_ROUNDS = 6

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true
  },
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

export default model('User', userSchema)