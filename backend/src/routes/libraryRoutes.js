import {Router} from 'express';
import {listBooks,createBook,deleteBook} from '../controllers/libraryController.js';
import {protect,adminOnly} from '../middleware/auth.js';
const r=Router();
r.get('/books',listBooks);
r.post('/books',protect,adminOnly,createBook);
r.delete('/books/:id',protect,adminOnly,deleteBook);
export default r;
