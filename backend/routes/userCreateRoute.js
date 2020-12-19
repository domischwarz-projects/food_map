import express from 'express'
import userCreateModel from '../models/userCreateModel'
const router = express.Router();

router.post('/', (req, res) => {
    const newUser  = req.body;
    console.log(newUser)
    const user = new userCreateModel( {
        userName: req.body.userName ,
        email: req.body.email,
        password: req.body.password,
       
    }); 
    user.save().then(() => res.json(user));
});

// GET USER BY ID
router.get('/:userId', (req, res) => {
    const {userId}  = req.params;
    console.log("USERID IN SERVER", userId)
    console.log("PARAMS IN SERVER", req.params)
});

module.exports = router;