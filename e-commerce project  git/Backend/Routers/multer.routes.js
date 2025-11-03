import express from 'express';
import upload from '../controller/multer.controller.js';

const router = express.Router();

router.post('/upload', upload.single('image'), function(req, res) {
  // File has been uploaded, do further processing here
  // For example, you can save the file data to the database
  // or send a response indicating success
  res.json({ message: 'File uploaded successfully!' });
});

export default router;
