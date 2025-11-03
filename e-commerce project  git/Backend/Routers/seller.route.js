import express from 'express';
import { seller } from '../controller/seller.controller.js';

const router = express.Router();

router.post('/', seller);

export default router;
