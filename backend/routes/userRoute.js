import express from 'express'
import UserModel from '../models/userModel'
const router = express.Router();

router.post('/', (req, res) => {
    const newUser  = req.body;
    console.log(newUser)
    const user = new UserModel( {
        fullName: req.body.fullName ,
        email: req.body.email,
       
    }); 
    user.save().then(() => res.json(user));
});



module.exports = router;