import jwt from 'jsonwebtoken';
import User from '../models/User.js';
export async function protect(req,res,next){try{const header=req.headers.authorization||'';const token=header.startsWith('Bearer ')?header.slice(7):null;if(!token)return res.status(401).json({message:'Please sign in to continue.'});const decoded=jwt.verify(token,process.env.JWT_SECRET);req.user=await User.findById(decoded.id);if(!req.user)return res.status(401).json({message:'Account not found.'});next();}catch{return res.status(401).json({message:'Session expired. Please sign in again.'});}}
export function adminOnly(req,res,next){if(req.user?.role!=='admin')return res.status(403).json({message:'Administrator access required.'});next();}
