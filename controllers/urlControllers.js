import {load} from 'cheerio'
import Scrap from '../models/scrapModel.js'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import axios from 'axios'

const scrap = asyncHandler(async (req, res) => {
    const {flipkartURL} = req.body
    const user = await User.findById(req.user._id)
    const link = await Scrap.findOne({flipkartURL: flipkartURL})
    if(link){
        if(link.user.toString() === req.user._id.toString())
            return res.status(400).json({message: 'Link already scraped', data: link})

        return res.status(400).json({message: 'Link already scraped by another user'})
    }
    const response = await axios.get(flipkartURL);
        const $ = load(response.data);

        const title = $('span[class="B_NuCI"]').text();
        const price = $('div[class="_30jeq3 _16Jk6d"]').text();
        const description = $('div[class="_2o-xpa"]').text(); // Adjust selector as needed
        const reviewCount = parseInt($('span[class="_2_R_DZ"]').text().split(' ')[0]);
        const rating = $('div[class="hGSR34 _2beYZw"]').text();
        const mediaCount = $('div[class="CXW8mj"]').length;

        const scrapedData = new Scrap({
            user: req.user._id,
            flipkartURL: flipkartURL,
            title: title,
            price: price,
            description: description,
            reviewCount: reviewCount,
            rating: rating,
            mediaCount: mediaCount,
        })
        await scrapedData.save()
        
        res.json({ message: 'Scraped and saved successfully', data: scrapedData });
    
}) 

export {scrap}