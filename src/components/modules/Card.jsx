"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Card = ({ customer }) => {
  // =========== Router =============
  const router = useRouter();

  // =========== Functions =============
  const deleteHandler = async () => {
    const response = await fetch(`/api/delete/${customer._id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (data === "Post Deleted") router.refresh();
  };

  // =========== Rendering =============
  return (
    <div className="card">
      <div className="card__details">
        <p>
          {customer.name} {customer.lastName}
        </p>
        <p>{customer.email}</p>
      </div>
      <div className="card__buttons">
        <button onClick={deleteHandler}>Delete</button>
        <Link href={`/edit/${customer._id}`}>Edit</Link>
        <Link href={`/customer/${customer._id}`}>Details</Link>
      </div>
    </div>
  );
};

export default Card;
