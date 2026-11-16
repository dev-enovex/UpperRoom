import {Router} from 'express';
import {mine,qr,pdf} from '../controllers/ticketController.js';
import {protect} from '../middleware/auth.js';
const r=Router();r.get('/mine',protect,mine);r.get('/:id/qr',protect,qr);r.get('/:id/pdf',protect,pdf);export default r;
