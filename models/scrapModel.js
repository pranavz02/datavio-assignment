import mongoose from 'mongoose'

const scrapSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    flipkartURL: {
        type: String,
    },
    title: String,
    price: String,
    rating: String,
    description: String,
    reviewCount: String,
    mediaCount: String,
})

const Scrap = mongoose.model('Scrap', scrapSchema)

export default Scrap