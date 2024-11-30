const bcrypt = require('bcrypt')
const userSignUpInfoModel = require('../models/userInfo.model')

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const getSignUpInfo = async (req, res) => {
  try {
    const { Name, email, phoneNumber, password } = req.body

    if (!Name || !email || !phoneNumber || !password) {
      return res.status(400).json({ message: 'All fields are required.' })
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format.' })
    }

    const existingUser = await userSignUpInfoModel.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use.' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const userInfo = new userSignUpInfoModel({
      Name,
      email,
      phoneNumber,
      password: hashedPassword,
    })

    await userInfo.save()

    res.status(201).json({ message: 'Signup successful!' })
  } catch (error) {
    console.error('Failed to sign up:', error.message)
    res.status(500).json({ message: 'Internal server error.' })
  }
}

module.exports = {
  getSignUpInfo,
}
