const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt') // npm i bcrypt

const SALT_ROUNDS = 6 // 6 is a reasonable value. secure but not too much processing power

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true, // removes whitespace from before and after the string
    lowercase: true, // converts to lowercase before saving
    required: true,
  },
  password: {
    type: String,
    trim: true,
    minLength: 3,
    required: true,
  }
}, { // options object - provides behavior to mongoose revolving around the user objects. doesn't have anything to do with what the data looks like, but rather customize behavior around the user object
  timestamps: true,
  toJSON: { // defines behavior to occur whenever we take a user object and convert it to JSON
    transform: function(doc, ret) { // two parameters. ret param represents the user object that is being transformed
      delete ret.password // remove the password before sending to the front end
      return ret
    }
  }
})

userSchema.pre('save', async function(next) { // the .pre will fire before the save (before user is saved to the database). (next) keeps the flow going
  // 'this' is the user doc that is about to be saved
  if (!this.isModified('password')) return next() // returns true if any of the given paths are modified; otherwise returns false. let's check if certain properties on the user have been modified -- we care about the password here. if the password has NOT been modified since the last time we accessed the user document (if we are not creating/updating pass) ... then we run this line (which basically says do nothing)
  // but if we are creating the user or updating the password on an existing user:
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS) // overwrite the password. pass 2 arguments to the hash() function. 
  // 1st is the value we want to hash (the plain text password). 
  // 2nd is the SALT_ROUNDS, a variable that does not exist ( we will define it next ) -- determines processing time taken to do the hashing. more salt rounds = stronger hash. but too many salt rounds = slows down the app.
  return next() // continue on to save user to the database
})

module.exports = mongoose.model('User', userSchema)