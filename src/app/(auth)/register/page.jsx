import RegisterInterface from "@/modules/register";
import Image from "next/image";

const Register = () => {
  return (
    <div className="flex flex-col p-4 items-center  justify-center mt-28 w-[650px] m-auto space-y-4 border border-blue-300 rounded-lg shadow-md ">
      <div className="mt-2">
        <Image src={"/logo-dark.png"} width={250} height={250} alt="Test" />
      </div>
      <div className="mt-5">
        <h1 className="font-semibold text-3xl text-center">Register</h1>
      </div>
      <div>
        <RegisterInterface />
      </div>
    </div>
  );
};

export default Register;
