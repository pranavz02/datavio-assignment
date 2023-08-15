import express from 'express'
import dotenv from 'dotenv'
import connectDb from"./config/dbconnect.js"
import authRoutes from './routes/authRoutes.js'
import urlRoutes from './routes/urlRoutes.js'

dotenv.config()

connectDb()
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json())
app.use('/api/user', authRoutes)
app.use('/api/url', urlRoutes)

app.get("/", (req, res)=> {
  res.send('API is running...')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})