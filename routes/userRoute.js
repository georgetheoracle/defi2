import { Router } from 'express';
import User from '../model/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import authMiddleware from '../middleware/authMiddleware.js';
const router = Router();

router.post('/signup', async(req, res)=>{
    const { username, email, password} = req.body;
    console.log(req.body)
    const userExist = await User.findOne({email: email});
    if(userExist){
        return res.status(200).json({message: 'user already exist', success: false})
    }
    const hashPassword = bcrypt.hashSync(password, 10)
    const newUser = new User({username, email,password: hashPassword });
    try{
    await newUser.save()
    res.status(201).json({message: "User created successfully", success: true})
    } catch (error){
    res.status(500).json({message: "Error creating user", success: false}, error)
        
    }
})

router.post('/login', async(req, res)=>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email:email});
        if(!user){
            return res.status(200).json({message: 'user does not exist', success: false});
        }
        const validPassword = bcrypt.compareSync(password, user.password);
        if(!validPassword){
            return res.status(200).json({message: 'Password is incorrect', success: false});
        }else{

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        // const { password: hashPassword, ...rest } = user._doc;
        const expiryDate = new Date(Date.now() + 3600000); // 1 hour
        res.cookie('accesstoken', token, {httpOnly: true, expires: expiryDate}).status(200).json({message: "Login successful", success:true});
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Error Logging in', success: false, error})
    }
})

router.post('/get-user-info-by-id', authMiddleware,  async()=>{
    try {
        const user = await User.findOne({_id: req.body.userId})
        user.password = undefined;
        if(!user){
            return res.status(200).json({message: "user does not exist", success: false});
        }else{
            res.status(200).json({ success: true, data: {
                name: user.username,
                email: user.email
            }})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error getting user info", success: false})
    }
})

export default router

