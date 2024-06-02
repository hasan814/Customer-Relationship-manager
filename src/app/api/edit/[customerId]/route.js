import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
  const { slug } = params;
  const data = request.body;
  console.log(data);
  try {
    await connectDB();
    const customer = await Customer.findOne({ _id: slug });
    console.log(customer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to Delete Data" },
      { status: 500 }
    );
  }
};
