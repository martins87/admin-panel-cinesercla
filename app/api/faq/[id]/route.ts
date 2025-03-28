import { NextRequest, NextResponse } from "next/server";

import connectToDatabase from "@/lib/db/connection";
import Faq from "../../../models/faq";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    await connectToDatabase();

    const faq = await Faq.findById(id);

    return NextResponse.json(faq);
  } catch (error) {
    console.error(`Error fetching FAQ ${id}:`, error);

    return NextResponse.json(
      { error: `Failed to fetch FAQ id ${id}` },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await request.json();

  try {
    await connectToDatabase();

    const updatedFaq = await Faq.findByIdAndUpdate(id, body, { new: true });

    if (!updatedFaq) {
      return NextResponse.json({ error: "FAQ not found" }, { status: 404 });
    }

    return NextResponse.json(updatedFaq);
  } catch (error) {
    console.error(`Error updating FAQ ${id}:`, error);

    return NextResponse.json(
      { error: `Failed to update FAQ ${id}` },
      { status: 500 }
    );
  }
}
