import clsx from "clsx";
const InputButton = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        "p-3  bg-[#0171d3]  rounded-md tracking-wider hover:bg-[#0185f9] text-white ",
        className
      )}
    >
      {children}
    </button>
  );
};

export default InputButton;
