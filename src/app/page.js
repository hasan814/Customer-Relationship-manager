import HomePage from "@/templates/HomePage";
import { getUsers } from "@/utils/data";
import React from "react";

const Home = async () => {
  const customers = await getUsers();

  return <HomePage customers={customers} />;
};

export default Home;
