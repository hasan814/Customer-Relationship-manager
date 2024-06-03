import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Link href={"/"}>Customer Relationship Manager</Link>
      <Link href={"/add-customer"}>Add Customer</Link>
    </header>
  );
};

export default Header;
