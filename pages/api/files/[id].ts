import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId, GridFSBucket } from "mongodb";

import connectToDatabase from "@/lib/db/connection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
  } = req;

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const client = await connectToDatabase();
    const db = client.connection.db;

    const bucket = new GridFSBucket(db, { bucketName: "uploads" });
    const objectId = new ObjectId(id as string);

    const filesCollection = db.collection("uploads.files");
    const file = await filesCollection.findOne({ _id: objectId });

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    res.setHeader(
      "Content-Type",
      file.contentType || "application/octet-stream"
    );
    res.setHeader("Content-Disposition", `inline; filename="${file.filename}"`);

    const downloadStream = bucket.openDownloadStream(objectId);
    downloadStream.pipe(res);
  } catch (err) {
    console.error("Serve file error:", err);
    res.status(500).json({ error: "Failed to stream file" });
  }
}
