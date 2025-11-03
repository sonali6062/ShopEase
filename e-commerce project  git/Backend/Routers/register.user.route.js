// user.route.js

import express from 'express';
import { registerUser } from '../controller/register.user.controller.js';

const router = express.Router();

router.post('/', registerUser);



export default router;
