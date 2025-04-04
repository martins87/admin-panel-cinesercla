import { NextRequest, NextResponse } from "next/server";

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

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const data = await request.json();
    const newFaq = new Faq(data);
    const savedFaq = await newFaq.save();

    return NextResponse.json(savedFaq, { status: 201 });
  } catch (error) {
    console.error("Error creating FAQ:", error);

    return NextResponse.json(
      { error: "Failed to create FAQ" },
      { status: 500 }
    );
  }
}
