import multer from 'multer';

// Multer Storage Configuration
const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'publics/img');
  },
  filename: function (req, file, cb) {
    cb(null, `user-${Date.now()}.jpeg`);
  }
});

// Multer File Filter Configuration
const multerFilter = function (req, file, cb) {
  // Implement your file filtering logic here
  if (file.mimetype.startsWith('img')) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error('Not an image! Please upload only images.'), false); // Reject the file
  }
};

// Multer Upload Configuration
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

export default upload;
