"use client";
import dynamic from "next/dynamic";

// ⛔ Dynamically import the SignupForm with SSR disabled
const SignupForm = dynamic(() => import("../../../components/register/Register"), {
  ssr: false,
});

export default function Register() {
  return <SignupForm />;
}
