import { NextRequest, NextResponse } from "next/server";

import connectToDatabase from "@/lib/db/connection";
import Bomboniere from "@/app/models/bomboniere";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await connectToDatabase();

    const deletedProduct = await Bomboniere.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json(
        { error: `Product with ID ${id} not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: `Product with ID ${id} deleted successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error deleting product ${id}:`, error);

    return NextResponse.json(
      { error: `Failed to delete product ${id}` },
      { status: 500 }
    );
  }
}

// export async function PUT(
//   request: NextRequest,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   const { id } = await params;
//   const body = await request.json();

//   if (!body || Object.keys(body).length === 0) {
//     return NextResponse.json(
//       { error: "Request body is empty" },
//       { status: 400 }
//     );
//   }

//   try {
//     await connectToDatabase();

//     // const updatedProduct = await product.findByIdAndUpdate(id, body, { new: true });
//     const updatedProduct = await product.findOneAndUpdate(
//       { tmdbId: Number(id) },
//       body,
//       { new: true, runValidators: true }
//     );

//     if (!updatedProduct) {
//       return NextResponse.json(
//         { error: `Product with tmdbId ${id} not found` },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(updatedProduct);
//   } catch (error) {
//     console.error(`Error updating product with tmdbId ${id}:`, error);

//     return NextResponse.json(
//       { error: `Failed to update product with tmdbId ${id}` },
//       { status: 500 }
//     );
//   }
// }
