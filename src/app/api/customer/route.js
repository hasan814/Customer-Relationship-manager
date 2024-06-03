import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDB();

    // Parse the request body
    const body = await req.json();

    const { data } = body || {};

    if (!data || !data.name || !data.lastName || !data.email) {
      return NextResponse.json(
        { status: "failed", message: "Invalid Data" },
        { status: 400 }
      );
    }

    // Create a new customer
    const customer = await Customer.create(data);
    const customerObject = customer.toObject();

    // Send success response
    return NextResponse.json(
      { status: "success", message: "Data created", data: customerObject },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: "failed", message: "Error in Storing Data in DB" },
      { status: 500 }
    );
  }
};
