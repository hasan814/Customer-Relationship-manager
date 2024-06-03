"use client";

import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CustomerDetailsPage = ({ data }) => {
  const {
    _id,
    name,
    lastName,
    email,
    phone,
    postalCode,
    address,
    products,
    date,
  } = data;

  // ============= Router ===========
  const router = useRouter();

  // ============= Fucntions ===========
  const deleteHandler = async () => {
    const response = await fetch(`/api/delete/${_id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (data.message === "Post Deleted") router.push("/");
  };

  // ============= rendering ===========
  return (
    <div className="customer-detail">
      <h4>Customer&apos;s Details</h4>
      <div className="customer-detail__main">
        <div className="customer-detail__item">
          <span>Name:</span>
          <p>{name}</p>
        </div>
        <div className="customer-detail__item">
          <span>LastName:</span>
          <p>{lastName}</p>
        </div>
        <div className="customer-detail__item">
          <span>Email:</span>
          <p>{email}</p>
        </div>
        <div className="customer-detail__item">
          <span>Phone:</span>
          <p>{phone}</p>
        </div>
        <div className="customer-detail__item">
          <span>Address:</span>
          <p>{address}</p>
        </div>
        <div className="customer-detail__item">
          <span>PostalCode:</span>
          <p>{postalCode}</p>
        </div>
        <div className="customer-detail__item">
          <span>Date:</span>
          <p>{moment(date).utc().format("YYYY-MM-DD")}</p>
        </div>
      </div>
      <div className="customer-detail__products">
        <p>Name:</p>
        <p>Price:</p>
        <p>Qty:</p>
        {products.map((product) => (
          <React.Fragment key={uuidv4()}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.qty}</p>
          </React.Fragment>
        ))}
      </div>
      <div className="customer-detail__buttons">
        <p>Edit or Delete</p>
        <button onClick={deleteHandler}>Delete</button>
        <Link href={`/edit/${_id}`}>Edit</Link>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;
