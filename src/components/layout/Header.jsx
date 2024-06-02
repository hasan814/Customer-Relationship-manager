import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <h2>Customer Relationship Manager</h2>
      <Link href={"/add-customer"}>Add Customer</Link>
    </header>
  );
};

export default Header;
