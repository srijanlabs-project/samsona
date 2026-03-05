import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">

        <div className="logo">
          <img
          src="/images/logo.jpeg"
          alt="Samsona Logo"
          style={{ height: "80px", width: "80px" }}
        />
        </div>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Solutions</Link>
          <Link href="/products">Products</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}