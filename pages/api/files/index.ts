import type { NextApiRequest, NextApiResponse } from "next"
import { MongoClient, GridFSBucket } from "mongodb"

const MONGODB_URI = process.env.MONGODB_URI as string
const MONGODB_DB = new URL(MONGODB_URI).pathname?.substring(1) || "test"

let cachedClient: MongoClient | null = null

async function connect() {
  if (!cachedClient) {
    cachedClient = await new MongoClient(MONGODB_URI).connect()
  }
  return cachedClient
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const client = await connect()
    const db = client.db(MONGODB_DB)
    const files = await db.collection("uploads.files").find().toArray()

    res.status(200).json(files.map(file => ({
      id: file._id,
      filename: file.filename,
      length: file.length,
      uploadDate: file.uploadDate,
      contentType: file.contentType,
    })))
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch files" })
  }
}
