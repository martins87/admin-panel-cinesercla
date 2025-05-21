import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";

import upload from "@/lib/multer";

interface NextApiRequestWithFile extends NextApiRequest {
  file?: {
    _id: ObjectId;
    filename: string;
    [key: string]: any;
  };
}

export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
  },
};

const runMiddleware = (
  // req: NextApiRequest,
  req: NextApiRequestWithFile,
  res: NextApiResponse,
  fn: Function
) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async function handler(
  req: NextApiRequestWithFile,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log("Incoming POST request to /api/upload");
    // console.log("req.body", req.body); // This will always be undefined due to bodyParser: false for FormData. It's expected.

    try {
      await new Promise<void>((resolve, reject) => {
        // Multer processing
        upload.single("file")(req, res, (err: any) => {
          if (err) {
            console.error("Multer callback error (err object):", err);
            // If the error is from GridFS storage, it might have a more detailed message
            if (err.message) {
              console.error("Multer callback error message:", err.message);
            }
            if (err.code) {
              // Multer errors often have a 'code'
              console.error("Multer callback error code:", err.code);
            }
            return reject(err); // Reject the promise if Multer has an error
          }
          console.log(
            "Multer processing finished, no direct error passed to callback."
          );
          resolve(); // Resolve the promise if Multer finishes without an error
        });
      });

      // After middleware, req.file should be populated by Multer if successful
      const file = req.file; // This line is reached ONLY if the Promise resolves

      console.log("After Multer middleware, req.file:", file); // Crucial log

      if (!file) {
        // This case should ideally be caught by the Multer error handler above,
        // but it's a good fallback for unexpected scenarios.
        console.error(
          "No file found in req.file after Multer processing, despite no callback error."
        );
        return res
          .status(400)
          .json({
            success: false,
            error: "No file uploaded or processed successfully by Multer.",
          });
      }

      // Check if _id exists on the file object
      // It's possible that file is an empty object or missing _id if GridFS failed internally
      if (!file._id) {
        console.error("Uploaded file object is missing _id:", file);
        return res
          .status(500)
          .json({
            success: false,
            error: "Uploaded file data incomplete (_id missing).",
          });
      }

      console.log("[pages/api/upload] File details:", {
        fileId: file._id,
        filename: file.filename,
      });

      return res.status(200).json({
        success: true,
        fileId: file._id,
        filename: file.filename,
      });
    } catch (error) {
      // This catch block handles errors rejected by the Promise
      console.error(
        "Upload handler caught an error (likely from Multer):",
        error
      );

      let errorMessage = "Upload failed";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (
        typeof error === "object" &&
        error !== null &&
        "message" in error
      ) {
        errorMessage = (error as { message: string }).message;
      }

      return res.status(500).json({ success: false, error: errorMessage });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
}
