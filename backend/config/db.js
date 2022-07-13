const mongoose=require("mongoose") 
const db =()=>{
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("DB CONNECTED");
    } catch (error) {
        console.log("unbale to connect" +error);
        process.exit
    }
}
module.exports=db
