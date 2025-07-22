"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../services/themes/Theme.css";
import "../utils/axios";

import { usePathname } from "next/navigation";
import Navbar from "../components/viab/navbar/Navbar";
import ReduxProvider from "@/store/reduxProvider";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayoutPaths = [
    "/auth/login",
    "/auth/otp",
    "/auth/register",
    "/auth/new-password",
    "/auth/forgot-password",
    "/",
    "/viab/generatedrawings", // ✅ Add your route here
  ];

  const shouldHideLayout = hideLayoutPaths.includes(pathname);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="antialiased">
        <ReduxProvider>
          {!shouldHideLayout && <Navbar />}
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
