import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    await connectDB();
    const customer = await Customer.findOne({ slug });
    return NextResponse.json(customer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to Fetch Data" },
      { status: 500 }
    );
  }
};
