import express from 'express'
import Restaurant from '../models/restaurantModel'

const router = express.Router()

router.get('/:id', (req, res) => {
    const {id} = req.params
    Restaurant.findOne({restaurant_id:id}).then((restaurant) => res.json(restaurant))
});

module.exports = router;