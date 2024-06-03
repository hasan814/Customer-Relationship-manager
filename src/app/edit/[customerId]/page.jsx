"use client";

import { useEffect, useState } from "react";
import { getUserById } from "@/utils/Fetch";
import CustomerEditPage from "@/templates/CustomerEditPage";

const Details = ({ params }) => {
  const { customerId } = params;

  // ============= State ============
  const [data, setData] = useState(null);

  // ============= Effect ============
  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserById(customerId);
      setData(userData);
    };
    fetchData();
  }, [customerId]);

  return <CustomerEditPage data={data} id={customerId} />;
};

export default Details;
