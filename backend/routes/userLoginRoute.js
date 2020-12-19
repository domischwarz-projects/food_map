import express from 'express'
import userLoginModel from '../models/userLoginModel'
const router = express.Router();

router.post('/', (req, res) => {
    const newUser  = req.body;
    console.log(newUser)
    const user = new userLoginModel( {
        email: req.body.email,
        password: req.body.password,
       
    }); 
    user.save().then(() => res.json(user));
});

module.exports = router;