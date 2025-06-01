import { NextRequest, NextResponse } from "next/server";

import connectToDatabase from "@/lib/db/connection";
import Unidade from "@/app/models/unidade";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await connectToDatabase();

    const deletedUnidade = await Unidade.findByIdAndDelete(id);

    if (!deletedUnidade) {
      return NextResponse.json(
        { error: `Unidade with ID ${id} not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: `Unidade with ID ${id} deleted successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error deleting unidade ${id}:`, error);

    return NextResponse.json(
      { error: `Failed to delete unidade ${id}` },
      { status: 500 }
    );
  }
}
