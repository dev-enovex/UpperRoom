import mongoose from 'mongoose';
const ticketSchema=new mongoose.Schema({name:{type:String,required:true},description:String,price:{type:Number,required:true,min:0},capacity:{type:Number,default:100},sold:{type:Number,default:0},salesEnd:Date});
const schema=new mongoose.Schema({title:{type:String,required:true},description:{type:String,default:''},date:Date,dateLabel:String,venue:String,status:{type:String,enum:['draft','published','cancelled'],default:'draft'},banner:String,ticketTypes:[ticketSchema],createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'}},{timestamps:true});
export default mongoose.model('Event',schema);
