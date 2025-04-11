import { NextRequest, NextResponse } from "next/server";

import connectToDatabase from "@/lib/db/connection";
import Movie from "@/app/models/movie";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await connectToDatabase();

    const deletedMovie = await Movie.findByIdAndDelete(id);

    if (!deletedMovie) {
      return NextResponse.json(
        { error: `Movie with ID ${id} not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: `Movie with ID ${id} deleted successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error deleting Movie ${id}:`, error);

    return NextResponse.json(
      { error: `Failed to delete Movie ${id}` },
      { status: 500 }
    );
  }
}
