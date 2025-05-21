// For Next.js App Router (recommended for new projects)
import { NextRequest, NextResponse } from "next/server";
import { GridFSBucket } from "mongodb";
import { Readable } from "stream";

import connectToDatabase from "@/lib/db/connection";

export async function POST(req: NextRequest) {
  try {
    const connection = await connectToDatabase();
    const db = connection.connections[0].db;

    const bucket = new GridFSBucket(db, {
      bucketName: "uploads",
    });

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
    }

    // Convert file to a Readable stream
    const fileStream = Readable.from(Buffer.from(await file.arrayBuffer()));

    // Create a write stream to GridFS
    const uploadStream = bucket.openUploadStream(file.name, {
      contentType: file.type,
    });

    // Await stream finish or throw on error
    await new Promise<void>((resolve, reject) => {
      fileStream.pipe(uploadStream).on("finish", resolve).on("error", reject);
    });

    return NextResponse.json(
      { message: "File uploaded successfully!", fileId: uploadStream.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error during file upload:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

// IMPORTANT: Disable Next.js Body Parser for this route
export const config = {
  api: {
    bodyParser: false,
  },
};
