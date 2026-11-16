import {Router} from 'express';
import {initialize,verify,myPayments} from '../controllers/paymentController.js';
import {protect} from '../middleware/auth.js';
const r=Router();r.post('/initialize',protect,initialize);r.post('/verify',protect,verify);r.get('/mine',protect,myPayments);export default r;
