import Book from '../models/Book.js';
export async function listBooks(req,res){
 const filter={published:true};
 if(req.query.category) filter.category=req.query.category;
 if(req.query.subcategory) filter.subcategory=req.query.subcategory;
 const books=await Book.find(filter).sort({category:1,title:1});
 res.json({books});
}
export async function createBook(req,res){
 const {title,author,category,subcategory,description,coverImage,fileUrl}=req.body;
 if(!title||!category||!subcategory||!fileUrl) return res.status(400).json({message:'Title, category, topic and book file URL are required.'});
 const book=await Book.create({title,author,category,subcategory,description,coverImage,fileUrl,createdBy:req.user._id});
 res.status(201).json({book});
}
export async function deleteBook(req,res){
 const book=await Book.findByIdAndDelete(req.params.id);
 if(!book) return res.status(404).json({message:'Book not found.'});
 res.json({success:true});
}
