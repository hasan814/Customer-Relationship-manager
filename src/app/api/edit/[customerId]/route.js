import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
  const { customerId } = params;
  const data = await request.json();
  try {
    await connectDB();
    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      {
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        postalCode: data.postalCode,
        date: data.date,
        products: data.products,
        updatedAt: new Date(),
      },
      { new: true }
    ).lean();
    if (!updatedCustomer)
      return NextResponse.json(
        { error: "Customer not Found" },
        { status: 404 }
      );

    return NextResponse.json({ message: "success", updatedCustomer });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to Delete Data" },
      { status: 500 }
    );
  }
};
