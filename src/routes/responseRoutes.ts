import { Router } from 'express';
import { createResponse, getAllResponses } from '../controllers/responseController';

const router = Router();

router.post('/responses', createResponse);
router.get('/responses/all', getAllResponses);

export default router;
