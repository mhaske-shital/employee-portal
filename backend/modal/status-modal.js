const mongoose=require("mongoose")

const statusSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   
   
},{timestamps:true})
module.exports=mongoose.model("status",statusSchema)