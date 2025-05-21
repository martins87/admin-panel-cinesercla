import type { NextApiRequest, NextApiResponse } from "next";

import { GridFSFile } from "@/app/types/gridfsFile";
import connectToDatabase from "@/lib/db/connection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const client = await connectToDatabase();
    const db = client.connection.db;
    const files = await db.collection("uploads.files").find().toArray();

    res.status(200).json(
      files.map((file: GridFSFile) => ({
        _id: file._id,
        filename: file.filename,
        length: file.length,
        uploadDate: file.uploadDate,
        contentType: file.contentType,
      }))
    );
  } catch (error) {
    res.status(500).json({ error: `Failed to fetch files: ${error}` });
  }
}
