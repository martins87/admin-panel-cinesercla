import { NextRequest, NextResponse } from "next/server";

import connectToDatabase from "@/lib/db/connection";
import Banner from "@/app/models/banner";

export async function GET() {
  try {
    await connectToDatabase();

    const bannerList = await Banner.find();

    return NextResponse.json(bannerList);
  } catch (error) {
    console.error("Error fetching Banners:", error);

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
    const newBanner = new Banner(data);
    const savedBanner = await newBanner.save();

    return NextResponse.json(savedBanner, { status: 201 });
  } catch (error) {
    console.error("Error creating Banner:", error);

    return NextResponse.json(
      { error: "Failed to create Banner" },
      { status: 500 }
    );
  }
}
