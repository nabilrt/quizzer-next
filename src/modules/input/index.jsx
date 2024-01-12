import clsx from "clsx";
import { forwardRef } from "react";

const FormInputField = ({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={clsx(
        "px-4 py-3 border border-slate-900 active:border-slate-800 text-lg rounded-md outline-none",
        className
      )}
    />
  );
};

export default forwardRef(FormInputField);
