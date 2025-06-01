import { NextRequest, NextResponse } from "next/server";

import connectToDatabase from "@/lib/db/connection";
import Unidade from "@/app/models/unidade";

export async function GET() {
  try {
    await connectToDatabase();

    const unidadeList = await Unidade.find();

    return NextResponse.json(unidadeList);
  } catch (error) {
    console.error("Error fetching unidades:", error);

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
    const newUnidade = new Unidade(data);
    const savedUnidade = await newUnidade.save();

    return NextResponse.json(savedUnidade, { status: 201 });
  } catch (error) {
    console.error("Error creating unidade:", error);

    return NextResponse.json(
      { error: "Failed to create unidade" },
      { status: 500 }
    );
  }
}
