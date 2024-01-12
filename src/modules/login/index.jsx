"use client";
import FormInputField from "@/modules/input";
import FormPasswordField from "@/modules/password-input";
import InputButton from "../input-button";
import Link from "next/link";
const LoginInterface = () => {
  return (
    <div className="space-y-4">
      <FormInputField placeholder="Email Address" className="w-full" />
      <FormPasswordField placeholder="Password" className="w-full" />
      <p className="text-base text-center">
        <Link href="/forgot-password" className="hover:underline">
          Forgot Password?
        </Link>
      </p>
      <InputButton className="w-full">Login</InputButton>
      <p className="text-base text-center">
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>
      <p className="text-base text-center">
        Back to{"  "}
        <Link href="/" className="text-blue-500 hover:underline">
          Homepage
        </Link>
      </p>
      <p className="text-base text-center">
        &#169; 2024 Copyright . Quizzer . All rights reserved
      </p>
    </div>
  );
};

export default LoginInterface;
