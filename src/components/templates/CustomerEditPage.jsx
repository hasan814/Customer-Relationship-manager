"use client";

import Form from "@/modules/Form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CustomerEditPage = ({ data, id }) => {
  // ============= Router =================
  const router = useRouter();

  // ============= State =================
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    products: "",
    date: "",
  });

  // ============= Effect =================
  useEffect(() => {
    if (data) {
      setForm({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || "",
        address: data.address || "",
        postalCode: data.postalCode || "",
        products: data.products || "",
        date: data.date || "",
      });
    }
  }, [data]);

  // ============= Function =================
  const saveHandler = async () => {
    const response = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (data.message === "success") router.push("/");
  };

  const cancelHandler = () => {
    router.push("/");
  };

  // ============= Rendering =================
  return (
    <div className="customer-page">
      <h4>Edit Customer</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={saveHandler}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default CustomerEditPage;
