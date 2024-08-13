import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    number: String,
    name: { type: String},
    startDate: { type: Date},  
    endDate: { type: Date}, 
    department: { type: String},  
    credits: { type: Number}, 
    description: { type: String},
}, 
{ collection: "courses" });

export default courseSchema;


