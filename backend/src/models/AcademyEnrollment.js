import mongoose from 'mongoose';
const schema = new mongoose.Schema({
 user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
 courseTitle:{type:String,required:true},
 fullName:{type:String,required:true},
 phone:{type:String,required:true},
 experience:{type:String,default:'Beginner'},
 goals:{type:String,default:''},
 status:{type:String,enum:['new','contacted','enrolled','closed'],default:'new'},
 completedLessons:[{type:mongoose.Schema.Types.ObjectId}],
 certificateIssuedAt:{type:Date,default:null}
},{timestamps:true});
schema.index({user:1,courseTitle:1});
export default mongoose.model('AcademyEnrollment',schema);
