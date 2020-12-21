import express from 'express'
import UserModel from '../models/UserModel'
import jwt from 'jsonwebtoken'
const router = express.Router();

router.post('/', (req, res) => {
   
    UserModel.findOne({userName: req.body.userName})
        .then((user) => {
            if (user.password === req.body.password)
            {
                const accesstoken = jwt.sign({id:user._id, userName:user.userName}, 'Top Secret')
                res.json({id:user._id, userName:user.userName, accesstoken})
            }else{
                res.json({error:'Password did not match'})
            }	
    }).catch(error => res.json(error.message))
});

module.exports = router;