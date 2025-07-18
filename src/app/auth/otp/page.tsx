
"use client";
import dynamic from "next/dynamic";

// Dynamically import the component to avoid SSR issues
const OtpPage = dynamic(() => import("../../../components/auth/OTP"), {
  ssr: false,
});

export default function OTP() {
  return <OtpPage />;
}
