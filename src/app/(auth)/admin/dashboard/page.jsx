import AdminCard from "@/modules/admin/admin-card";
import LanguageTable from "@/modules/admin/lang-table";
import AdminQuickLinks from "@/modules/admin/quick-links";
import StudentsTable from "@/modules/admin/students-table";
import Image from "next/image";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col space-y-4  p-2">
      <p className="text-xl font-semibold text-orange-500">
        Welcome to Admin Dashboard
      </p>
      <hr className="bg-blue-500" />
      <div className="flex space-x-1 justify-between p-2 items-center w-full">
        <AdminCard />
        <AdminQuickLinks />
      </div>
      <div className="flex space-x-3 justify-between p-2 items-center w-full">
        <StudentsTable />
        <LanguageTable />
      </div>
    </div>
  );
};

export default AdminDashboard;
