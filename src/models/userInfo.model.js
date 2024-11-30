const mongoose = require('mongoose')

const userInfoSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, 'Name is required.'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please provide a valid email address.',
      ],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required.'],
      match: [/^[0-9]+$/, 'Phone number must contain only numeric characters.'],
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
      minlength: [6, 'Password must be at least 6 characters long.'],
    },
  },
  { timestamps: true }
)

const User = mongoose.model('User', userInfoSchema)

module.exports = User
