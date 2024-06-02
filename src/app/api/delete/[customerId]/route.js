import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    await connectDB();
    await Customer.deleteOne({ slug });
    return NextResponse.json("Post Deleted");
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to Delete Data" },
      { status: 500 }
    );
  }
};
