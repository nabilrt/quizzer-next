import clsx from "clsx";
const Button = ({ children, variant = "primary", className, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        "p-2  bg-[#ede248]  rounded-md tracking-wider hover:bg-yellow-600 text-black font-semibold",{},
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
