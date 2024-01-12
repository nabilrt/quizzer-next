"use client";
import FormInputField from "@/modules/input";
import FormPasswordField from "@/modules/password-input";
import InputButton from "@/modules/input-button";
import Link from "next/link";
const RegisterInterface = () => {
  return (
    <div className="space-y-4">
      <FormInputField placeholder="Full Name" className="w-full" />
      <FormInputField placeholder="Email" className="w-full" />
      <FormPasswordField placeholder="Password" className="w-full" />
      <FormPasswordField placeholder="Confirm Password" className="w-full" />
      <FormInputField placeholder="Email" className="w-full" type="file" />

      <InputButton className="w-full">Login</InputButton>
      <p className="text-base text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Login
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
export default RegisterInterface;
