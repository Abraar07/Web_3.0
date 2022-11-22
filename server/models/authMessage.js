import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    title: String,
    firstname: String,
    lastname: String,
    email: String,
    password:String,
    cpassword:String
})

const AuthMessage = mongoose.model("AuthMessage",authSchema)

export default AuthMessage;