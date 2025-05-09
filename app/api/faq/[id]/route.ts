import { NextRequest, NextResponse } from "next/server";

import connectToDatabase from "@/lib/db/connection";
import Faq from "../../../models/faq";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await connectToDatabase();

    const faq = await Faq.findById(id);

    if (!faq) {
      return NextResponse.json(
        { error: `FAQ with ID ${id} not found` },
        { status: 404 }
      );
    }

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

    const updatedFaq = await Faq.findByIdAndUpdate(id, body, { new: true });

    if (!updatedFaq) {
      return NextResponse.json(
        { error: `FAQ with ID ${id} not found` },
        { status: 404 }
      );
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await connectToDatabase();

    const deletedFaq = await Faq.findByIdAndDelete(id);

    if (!deletedFaq) {
      return NextResponse.json(
        { error: `FAQ with ID ${id} not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: `FAQ with ID ${id} deleted successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error deleting FAQ ${id}:`, error);

    return NextResponse.json(
      { error: `Failed to delete FAQ ${id}` },
      { status: 500 }
    );
  }
}
