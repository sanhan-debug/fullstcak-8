import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: String,
    description: String,
    image: String
}, {
    versionKey: false,
})


export const userModel = model("users", userSchema)