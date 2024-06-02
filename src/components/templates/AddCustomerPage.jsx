"use client";

import { useState } from "react";
import Form from "../modules/Form";
import { useRouter } from "next/navigation";

const AddCustomerPage = () => {
  // ========= Router =========
  const router = useRouter();

  // ========= State =========
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });

  // ========= Functions =========
  const saveHandler = async () => {
    const response = await fetch("/api/customer", {
      method: "POST",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    if (data.status === "success") router.push("/");
  };
  const cancelHandler = () => {
    setForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      date: "",
      products: [],
    });
    router.push("/");
  };

  // ========= Rendering =========
  return (
    <div className="customer-page">
      <h4>Add Customer Page</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          cancel
        </button>
        <button className="second" onClick={saveHandler}>
          save
        </button>
      </div>
    </div>
  );
};

export default AddCustomerPage;
