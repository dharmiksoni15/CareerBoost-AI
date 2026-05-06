const multer = require("multer");
const path = require("path");

// Configure storage for uploaded files
const storage = multer.diskStorage({
  // Define destination folder where files will be stored
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Files will be saved in 'uploads' folder
  },

  // Define custom filename
  filename: function (req, file, cb) {
    // Create a unique filename using timestamp + original file extension
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

// Filter to allow only PDF files
const fileFilter = (req, file, cb) => {
  // Check file type (MIME type)
  if (file.mimetype === "application/pdf") {
    cb(null, true); // Accept file
  } else {
    cb(new Error("Only PDF files are allowed"), false); // Reject file
  }
};

// Create multer upload instance with storage and filter configuration
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

// Export the upload middleware
module.exports = upload;