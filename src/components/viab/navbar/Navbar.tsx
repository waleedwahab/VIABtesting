"use client";
import Image from "next/image";
import Link from "next/link";
import axios from "@/utils/axios"
import {usePathname } from 'next/navigation';
import { FaSearch, FaEnvelope } from "react-icons/fa";
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
import "./Navbar.css";


const Navbar = () => {
 const logOutt = async () => {
  try {
    console.log("in logout");

    await axios.post(`${baseURL}/users/logout`); // 🔁 Call backend logout

    // Optionally redirect user
    window.location.href = '/auth/login';
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom px-3 pt-3 pb-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" href="#">
          ◆ VIAB
        </Link>

        <button
          onClick={logOutt}
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-4">
            <li className="nav-item">
         <Link
  href="/viab/home"
  className={`nav-link ${pathname === "/viab/home" ? "active" : ""}`}
>
  Home
</Link>

            </li>
            <li className="nav-item">
                    <Link
  href="/viab/generatedrawings"
  className={`nav-link ${pathname === "/viab/generatedrawings" ? "active" : ""}`}
>
  Generate Drawings
</Link>
            </li>
            <li className="nav-item">
                   <Link
  href="/viab/design"
  className={`nav-link ${pathname === "/viab/design" ? "active" : ""}`}
>
  Design
</Link>
            </li>
            <li className="nav-item">
                   <Link
  href="/viab/orders"
  className={`nav-link ${pathname === "/viab/orders" ? "active" : ""}`}
>
  Order History
</Link>
            </li>
            <li className="nav-item">
                    <Link
  href="/viab/insurance"
  className={`nav-link ${pathname === "/viab/insurance" ? "active" : ""}`}
>
  Insurance
</Link>

            </li>
          </ul>

          <div className="d-flex align-items-center gap-2 mt-2 mt-lg-0">
            <div className="search-box d-flex align-items-center px-2">
              <FaSearch className="me-2 text-muted" />
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </div>
            <button className="btn btn-light icon-btn">
              <FaEnvelope />
            </button>
            <Image
              width={100}
              height={100}
              src="/assets/images/loginperson.png"
              alt="Profile"
              className="profile-pic"
              onClick={logOutt}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
