import Image from "next/image";
import NavLinks from "@/modules/inc/nav-links";

const AdminNavBar = () => {
  return (
    <div className="flex space-x-2 justify-between items-center p-2 border border-slate-100 shadow-md">
      <div className=" px-4">
        <Image src={"/logo-dark.png"} width={150} height={150} alt="Test" />
      </div>
      <div className="space-x-2 ">
        <NavLinks href={"/admin/dashboard"}>Dashboard</NavLinks>
        <NavLinks href={"/admin/quizzes"}>Quizzes</NavLinks>
        <NavLinks href={"/admin/languages"}>Languages</NavLinks>
        <NavLinks href={"/admin/students"}>All Students</NavLinks>
        <NavLinks href={"/admin/logout"}>Logout</NavLinks>
      </div>

      <div className=" space-x-2 flex items-center">
        <Image src={"/avatar.png"} width={50} height={50} alt="Test" />
        <p className="text-orange-500 font-semibold">Nabil</p>
      </div>
    </div>
  );
};

export default AdminNavBar;
