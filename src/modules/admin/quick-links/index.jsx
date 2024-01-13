import Link from "next/link";
const AdminQuickLinks = () => {
  return (
    <div className="flex flex-col space-y-2 border border-slate-100 p-3 shadow-md w-1/2">
      <div className="text-center text-xl">Quick Links</div>
      <QuickLinks color={"#f9530b"}>
        <Link href="/admin/create-quiz">Create Quiz</Link>
      </QuickLinks>
      <QuickLinks color={"#f9530b"}>
        <Link href="/admin/create-quiz">Quizzes</Link>
      </QuickLinks>
      <QuickLinks color={"#f9530b"}>
        <Link href="/admin/create-quiz">Students</Link>
      </QuickLinks>
    </div>
  );
};

const QuickLinks = ({ children }) => {
  return (
    <button
      className={`space-x-2 items-center text-center font-semibold uppercase p-2 border  bg-gradient-to-r from-[#fe8c00] to-[#f83600] text-white rounded-md hover:bg-gradient-to-r hover:from-[#FF8008] hover:to-[#FFC837]`}
    >
      {children}
    </button>
  );
};

export default AdminQuickLinks;
