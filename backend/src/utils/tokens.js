import jwt from 'jsonwebtoken';
export const signToken=(user)=>jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN||'7d'});
export const publicUser=(u)=>({_id:u._id,firstName:u.firstName,lastName:u.lastName,email:u.email,phone:u.phone,role:u.role,isVerified:u.isVerified});
