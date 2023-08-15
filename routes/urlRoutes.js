import express from 'express'
import {scrap } from '../controllers/urlControllers.js'
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', protect, scrap)

export default router