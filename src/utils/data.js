import { unstable_noStore as noStore } from "next/cache";

import Customer from "@/models/Customer";
import connectDB from "./connectDB";

export const getUsers = async () => {
  noStore();
  try {
    await connectDB();
    const customers = await Customer.find();
    return customers;
  } catch (error) {
    console.log(error);
    return new Error("Failed to Fetch Data");
  }
};
