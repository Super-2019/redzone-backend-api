//import Dependecys
const express = require('express');
const router = express.Router();

router.use(express.json())

//import models
const Listings = require('../../models/listings');

//posts

router.post('/create', async (req, res) => {
   const Listing = new Listings({
    address: req.body.address,
    closingDate: req.body.closingDate,
    lender: req.body.lender,
    client: req.body.client,
    contractValue: req.body.contractValue,
    commision: req.body.commision
   });

   const savedListing = await Listing.save()
   res.json(savedListing)
    
})


//export
module.exports = router