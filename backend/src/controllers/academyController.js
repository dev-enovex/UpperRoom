import mongoose from 'mongoose';
import AcademyEnrollment from '../models/AcademyEnrollment.js';
import AcademyCourse from '../models/AcademyCourse.js';

const courseTitles=['Web Development','UI/UX and Product Design','Artificial Intelligence and Productivity','Data Analytics','Cybersecurity Fundamentals','Digital Skills and Digital Marketing'];

export async function listCourses(req,res){
 const courses=await AcademyCourse.find({published:true}).sort({createdAt:-1});
 res.json({courses});
}
export async function createCourse(req,res){
 const {title,description,level,duration,lessons=[]}=req.body;
 if(!title?.trim()) return res.status(400).json({message:'Course title is required.'});
 if(!Array.isArray(lessons)) return res.status(400).json({message:'Lessons must be a list.'});
 try{
  const course=await AcademyCourse.create({title,description,level,duration,lessons:lessons.map((l,i)=>({title:l.title,description:l.description||'',videoUrl:l.videoUrl||'',resourceUrl:l.resourceUrl||'',order:i+1}))});
  res.status(201).json({course});
 }catch(error){if(error.code===11000)return res.status(409).json({message:'A course with this title already exists.'});throw error;}
}
export async function createEnrollment(req,res){
 const {courseTitle,fullName,phone,experience,goals}=req.body;
 if(!courseTitle||!fullName||!phone) return res.status(400).json({message:'Course, full name and phone number are required.'});
 const existing=await AcademyEnrollment.findOne({user:req.user._id,courseTitle,status:{$ne:'closed'}});
 if(existing) return res.status(409).json({message:'You already have an enrolment enquiry for this learning track.'});
 const enrollment=await AcademyEnrollment.create({user:req.user._id,courseTitle,fullName,phone,experience,goals});
 res.status(201).json({enrollment});
}
export async function listEnrollments(req,res){
 const enrollments=await AcademyEnrollment.find().populate('user','firstName lastName email').sort({createdAt:-1});
 res.json({enrollments});
}
export async function updateEnrollment(req,res){
 const allowed=['new','contacted','enrolled','closed'];
 if(!allowed.includes(req.body.status)) return res.status(400).json({message:'Invalid enrolment status.'});
 const enrollment=await AcademyEnrollment.findByIdAndUpdate(req.params.id,{status:req.body.status},{new:true});
 if(!enrollment) return res.status(404).json({message:'Enrolment not found.'});
 res.json({enrollment});
}
export async function myLearning(req,res){
 const enrollments=await AcademyEnrollment.find({user:req.user._id,status:'enrolled'}).sort({updatedAt:-1});
 const learning=await Promise.all(enrollments.map(async enrollment=>{
  const course=await AcademyCourse.findOne({title:enrollment.courseTitle,published:true});
  if(!course)return null;
  const total=course.lessons.length;
  const completed=enrollment.completedLessons.length;
  return {enrollmentId:enrollment._id,course,enrolledAt:enrollment.updatedAt,completedLessons:enrollment.completedLessons,progress:total?Math.round(completed/total*100):0,completed,total,certificateIssuedAt:enrollment.certificateIssuedAt};
 }));
 res.json({learning:learning.filter(Boolean)});
}
export async function completeLesson(req,res){
 const {courseId,lessonId}=req.params;
 if(!mongoose.isValidObjectId(courseId)||!mongoose.isValidObjectId(lessonId))return res.status(400).json({message:'Invalid course or lesson.'});
 const course=await AcademyCourse.findById(courseId);
 if(!course)return res.status(404).json({message:'Course not found.'});
 const lesson=course.lessons.id(lessonId);
 if(!lesson)return res.status(404).json({message:'Lesson not found.'});
 const enrollment=await AcademyEnrollment.findOne({user:req.user._id,courseTitle:course.title,status:'enrolled'});
 if(!enrollment)return res.status(403).json({message:'You are not enrolled in this course.'});
 if(!enrollment.completedLessons.some(id=>id.equals(lesson._id)))enrollment.completedLessons.push(lesson._id);
 const total=course.lessons.length;
 if(total>0&&enrollment.completedLessons.length>=total&&!enrollment.certificateIssuedAt)enrollment.certificateIssuedAt=new Date();
 await enrollment.save();
 res.json({success:true,completed:enrollment.completedLessons.length,total,progress:total?Math.round(enrollment.completedLessons.length/total*100):0,certificateIssuedAt:enrollment.certificateIssuedAt});
}
