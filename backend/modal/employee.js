const mongoose=require("mongoose")

const employeeSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    joiningDate:{
        type:Date,
        required:true
    },
    empcode:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    isAdmin:{
     type:Boolean,
     required:true,
     default:false
    }
},{timestamps:true})
module.exports=mongoose.model("employee",employeeSchema)