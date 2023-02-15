const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    title:{
        type:String
    },
    content:{
        type:String
    }
},{collection:"data"})
const UserModel=mongoose.model("data",UserSchema);
module.exports=UserModel;
