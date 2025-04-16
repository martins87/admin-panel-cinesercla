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

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  if (!body || Object.keys(body).length === 0) {
    return NextResponse.json(
      { error: "Request body is empty" },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();

    // const updatedMovie = await Movie.findByIdAndUpdate(id, body, { new: true });
    const updatedMovie = await Movie.findOneAndUpdate(
      { tmdbId: Number(id) },
      body,
      { new: true, runValidators: true }
    );

    if (!updatedMovie) {
      return NextResponse.json(
        { error: `Movie with tmdbId ${id} not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedMovie);
  } catch (error) {
    console.error(`Error updating movie with tmdbId ${id}:`, error);

    return NextResponse.json(
      { error: `Failed to update movie with tmdbId ${id}` },
      { status: 500 }
    );
  }
}
