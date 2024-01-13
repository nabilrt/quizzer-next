import Image from "next/image";
const AdminCard = () => {
  return (
    <div className="flex flex-col space-y-1 border border-slate-100 p-3 shadow-md w-1/2 items-center">
      <div className="text-center text-xl">Your Details</div>
      <div className="flex space-x-3 ">
        <Image src="/avatar.png" width={150} height={150} alt="Test" />
        <div className="flex flex-col space-y-1 justify-center">
          <p className="font-semibold text-lg">Abidur Rahman Nabil</p>
          <p className="">nabilrt51@gmail.com</p>
          <p className="text-orange-500 font-bold uppercase">Super Admin</p>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
