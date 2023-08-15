import asyncHandler from "express-async-handler"
import  User  from "../models/userModel.js"
import generateToken from "../utils/generateToken.js"

const register = asyncHandler(async (req, res) => {
    const { name, email, password, type, location } = req.body
    const regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regx.test(email)) {
        return res.status(400).json({ message: 'Enter a valid email ID' })
    }
    const user = await User.findOne({ email })
    if (user)
        return res.status(401).json({ message: 'This email ID is already registered' })
    
    const newUser = await User.create({ name, email, password })
    
    if (!newUser)
        return res.status(400).json({ message: 'Invalid user data' })
    
    res.status(201).json({ newUser, token: generateToken(newUser._id) })
})

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regx.test(email)) {
      return res.status(400).json({ message: 'Enter a valid email ID' })
    }
    const user = await User.findOne({ email })
    if (!user)
      return res.status(401).json({ message: 'New to NourishNet? Click on Register' })
  
      if (user && (await user.matchPassword(password))) {
        res.json({user,
          token: generateToken(user._id),
        })
      } else {
        res.status(401).json({message: 'Invalid password'})
      }
})

export { register, login }