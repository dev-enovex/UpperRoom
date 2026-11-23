import mongoose from 'mongoose';
const lessonSchema=new mongoose.Schema({
 title:{type:String,required:true},
 description:{type:String,default:''},
 videoUrl:{type:String,default:''},
 resourceUrl:{type:String,default:''},
 order:{type:Number,default:0}
});
const schema=new mongoose.Schema({
 title:{type:String,required:true,unique:true,trim:true},
 description:{type:String,default:''},
 level:{type:String,default:'Beginner'},
 duration:{type:String,default:'To be announced'},
 published:{type:Boolean,default:true},
 lessons:[lessonSchema]
},{timestamps:true});
export default mongoose.model('AcademyCourse',schema);
