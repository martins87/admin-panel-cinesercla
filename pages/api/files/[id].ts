import type { NextApiRequest, NextApiResponse } from "next"
import { MongoClient, ObjectId, GridFSBucket } from "mongodb"

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
  const {
    query: { id },
  } = req

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const client = await connect()
    const db = client.db(MONGODB_DB)

    const bucket = new GridFSBucket(db, { bucketName: "uploads" })
    const objectId = new ObjectId(id as string)

    const filesCollection = db.collection("uploads.files")
    const file = await filesCollection.findOne({ _id: objectId })

    if (!file) {
      return res.status(404).json({ message: "File not found" })
    }

    res.setHeader("Content-Type", file.contentType || "application/octet-stream")
    const downloadStream = bucket.openDownloadStream(objectId)
    downloadStream.pipe(res)
  } catch (err) {
    console.error("Serve file error:", err)
    res.status(500).json({ error: "Failed to stream file" })
  }
}
