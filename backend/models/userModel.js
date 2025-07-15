import mongoose from "mongoose"
import monogoose from "mongoose"

const userSchema = new monogoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}
},{minimize:false})

const userModel = monogoose.model.user || mongoose.model("user",userSchema);
export default userModel;