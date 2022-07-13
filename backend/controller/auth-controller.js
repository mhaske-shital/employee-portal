const { sign } = require("crypto")
const employeModel= require("../modal/employee")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

exports.login=async(req,res)=>{
    try {
        const {email,password,name}=req.body
        
        const userData=await employeModel.findOne({email})
        console.log(userData);
        if(!employeModel){
            return res.status(400).json({
                success:false,
                message:"email not found"
            })
        }
        const verify =await bcrypt.compare( password,userData.password)
        if(!verify){
            return res.status(400).json({
                success:false,
                message:"password not found" 
            })
        }
        const token = jwt.sign( {userId:userData._id},process.env.JWT_SECRET_KEY)
        res.json({
            success:true,
            message:"you are login successfully",
            result:userData,
            token
        })
    } catch (error) {
        res.json({
            success:false,
            message:"invalid password and email" + error
        })
    }
}

exports.getLoginEmployee=async(req,res)=>{
    try {
        const result =await employeModel.findOne({_id:req.params.id})  
        res.json({
            count:result.length,
            success:true,
            message:"login emp",
            data:result
        })
    } catch (error) {
        res.json({
            success:true,
            message:"something went wrong"+error,
            data:null
           })
    }
    }   