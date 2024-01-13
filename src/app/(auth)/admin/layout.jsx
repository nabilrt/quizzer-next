import AdminNavBar from "@/modules/inc/admin-nav";
import LandingFooter from "@/modules/landing/landing-footer";

export default function PageLayout({ children }) {
  return (
    <div className="flex flex-col space-y-2  ">
      <AdminNavBar />
      {children}
      <LandingFooter />
    </div>
  );
}
