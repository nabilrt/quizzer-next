import clsx from "clsx";
import { forwardRef, useState } from "react";
import Eye from "../icons/Eye";
import EyeOff from "../icons/EyeOff";

const FormPasswordInputField = ({ children, className, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative z-0 flex  space-x-2">
      <input
        ref={ref}
        type={`${showPassword ? "text" : "password"}`}
        className={clsx(
          " px-4 py-3 border border-slate-900 active:border-slate-800 text-lg rounded-md outline-none ",
          className
        )}
        {...props}
      >
        {children}
      </input>
      <span
        className="absolute  right-3 top-4 m-auto cursor-pointer"
        onClick={() => {
          setShowPassword(!showPassword);
        }}
      >
        {showPassword ? <Eye /> : <EyeOff />}
      </span>
    </div>
  );
};

export default forwardRef(FormPasswordInputField);
