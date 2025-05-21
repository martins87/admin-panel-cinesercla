import { GridFsStorage } from "multer-gridfs-storage";

import multer from "multer";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

const storage = new GridFsStorage({
  url: MONGO_URI,
  file: (req, file) => {
    console.log("Multer GridFsStorage: Processing file:", file.originalname); // Log when file function is hit
    return {
      filename: Date.now() + "-" + file.originalname,
      bucketName: "uploads",
    };
  },
});

const upload = multer({ storage });

export default upload;
