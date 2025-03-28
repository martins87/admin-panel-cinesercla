import { NextResponse } from "next/server";

import connectToDatabase from "@/lib/db/connection";
import Faq from "@/app/models/faq";

export async function GET() {
  try {
    await connectToDatabase();

    const faqList = await Faq.find();

    return NextResponse.json(faqList);
  } catch (error) {
    console.error("Error fetching FAQs:", error);

    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
