import {Router} from 'express';
import {listEvents,getEvent,createEvent} from '../controllers/eventController.js';
import {protect,adminOnly} from '../middleware/auth.js';
const r=Router();r.get('/',listEvents);r.get('/:id',getEvent);r.post('/',protect,adminOnly,createEvent);export default r;
