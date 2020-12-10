import mongoose from 'mongoose'

const restaurantSchema = new mongoose.Schema({
        cuisine: { type: Array, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        shortdescription: { type: String, required: true },
        address: {
                coord: { type: Array, required: true },
                street: { type: String, required: true }, 
                zipcode: { type: String, required: true }, 
                state: { type: String, required: true }, 
                city: { type: String, required: true },                 
                borough: { type: String, required: true }
        },
        openinghours: { type: Array, required: true },
        pricerange: { type: String, required: true },
        paymentvariation: { type: Array, required: true },
        phone: { type: String, required: true },
        restaurant_id: { type: String, required: true },
})

export default mongoose.model('Restaurant', restaurantSchema)