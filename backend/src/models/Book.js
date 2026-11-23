import mongoose from 'mongoose';
const schema = new mongoose.Schema({
 title:{type:String,required:true,trim:true},
 author:{type:String,default:''},
 category:{type:String,required:true},
 subcategory:{type:String,required:true},
 description:{type:String,default:''},
 coverImage:{type:String,default:''},
 fileUrl:{type:String,required:true},
 published:{type:Boolean,default:true},
 createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
},{timestamps:true});
export default mongoose.model('Book',schema);
