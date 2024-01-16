"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLinks = ({ children, href }) => {
  const pathName = usePathname();
  const url = pathName;

  return (
    <Link
      href={href}
      className={`p-3  text-black  ${
        url === href
          ? "text-orange-500 hover:text-orange-700"
          : "hover:underline"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
