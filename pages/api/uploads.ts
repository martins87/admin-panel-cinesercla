import type { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import { ObjectId } from 'mongodb';

interface NextApiRequestWithFile extends NextApiRequest {
  file?: {
    _id: ObjectId;  
    filename: string;
    [key: string]: any;
  };
}

// Configuração do storage para GridFS
const storage = new GridFsStorage({
  url: process.env.MONGODB_URI!,
  file: (req, file) => {
    return {
      filename: Date.now() + '-' + file.originalname,
      bucketName: 'uploads',
    };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({ storage: storage as any });

const runMiddleware = (req: NextApiRequestWithFile, res: NextApiResponse, fn: Function) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async function handler(req: NextApiRequestWithFile, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await runMiddleware(req, res, upload.single('file'));
      
      const file = req.file;
      console.log('Uploaded file:', file);
      
      if (!file) {
        return res.status(400).json({ success: false, error: 'No file uploaded' });
      }
      
      if (!file._id || !file.filename) {
        return res.status(400).json({ success: false, error: 'Invalid file upload' });
      }
      
      return res.status(200).json({
        success: true,
        fileId: file._id.toString(),
        filename: file.filename,
      });
    } catch (error) {
      console.error('Upload error:', error);
      return res.status(500).json({ success: false, error: 'Upload failed' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}