import { NextRequest, NextResponse } from "next/server";

import connectToDatabase from "@/lib/db/connection";
import Bomboniere from "@/app/models/bomboniere";

export async function GET() {
  try {
    await connectToDatabase();

    const productList = await Bomboniere.find();

    return NextResponse.json(productList);
  } catch (error) {
    console.error("Error fetching products:", error);

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
    const newProduct = new Bomboniere(data);
    const savedProduct = await newProduct.save();

    return NextResponse.json(savedProduct, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);

    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
