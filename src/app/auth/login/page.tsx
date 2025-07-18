"use client";
import dynamic from "next/dynamic";

const LoginForm = dynamic(() => import("../../../components/auth/login/Login"), {
  ssr: false,
});

export default function Login() {
  return <LoginForm />;
}
