import { Router } from 'express';
import { getCertificateVerification } from '../controllers/certificateController.js';

const router = Router();

// Route to get default verified certificate record
router.get('/verify', getCertificateVerification);

// Route to get certificate by candidate username / id
router.get('/verify/:id', getCertificateVerification);

export default router;
