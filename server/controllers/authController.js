import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

export const register = async (requestAnimationFrame,res)=>{
    const {name, email, password}= req.body;
    if(!name || !email || !password){
        return res.json({success: false, message: "Missing Details"})
    }
    
    try{

        const existingUser = await userModel.findOne({email})

        if(existingUser){
            return res.json({success: false, message: "User already exists"});
        }

        const hasedPassword =await bcrypt.hash(password,10);

        const user = new userModel({name, email, password:hasedPassword });
        await user.save();

    }catch(error){
        res.json({success: false, message: error.message})
    }
}