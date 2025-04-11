import { NextRequest, NextResponse } from "next/server";

import connectToDatabase from "@/lib/db/connection";
import Movie from "@/app/models/movie";

export async function GET() {
  try {
    await connectToDatabase();

    const movieList = await Movie.find();

    return NextResponse.json(movieList);
  } catch (error) {
    console.error("Error fetching movies:", error);

    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const data = await request.json();
    const newMovie = new Movie(data);
    const savedMovie = await newMovie.save();

    return NextResponse.json(savedMovie, { status: 201 });
  } catch (error) {
    console.error("Error creating movie:", error);

    return NextResponse.json(
      { error: "Failed to create movie" },
      { status: 500 }
    );
  }
}
