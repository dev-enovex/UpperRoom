import mongoose from 'mongoose';
const schema=new mongoose.Schema({user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},event:{type:mongoose.Schema.Types.ObjectId,ref:'Event',required:true},order:{type:mongoose.Schema.Types.ObjectId,ref:'Order',required:true},ticketCode:{type:String,unique:true,required:true},ticketType:String,qrPayload:String,checkedIn:{type:Boolean,default:false},checkedInAt:Date},{timestamps:true});
export default mongoose.model('Ticket',schema);
