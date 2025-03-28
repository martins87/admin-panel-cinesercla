import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/db/connection";

export async function GET() {
  const conn = await connectToDatabase();
  if (conn) {
    const connection = conn.connections[0];
    return NextResponse.json(
      {
        message: "Connected to database",
        host: connection.host,
        port: connection.port,
        readyState: connection.readyState,
      },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "Error connecting to database" },
      { status: 500 }
    );
  }
}
