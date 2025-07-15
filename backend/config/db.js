import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://omkarreddy:bunny1234@cluster0.rzdne4r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));
}
//mongodb+srv://praneethmahapathro:301005@cluster0.a7n48.mongodb.net/food-del

