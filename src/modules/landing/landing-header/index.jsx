import Image from "next/image";
import Link from "next/link";
const LandingHeader = () => {
  return (
    <div className="flex p-7 px-16 items-center bg-gradient-to-r from-[#471da3] to-[#643bbd]">
      <div className="mr-auto items-center">
        <Image src={"/quizzer.png"} width={150} height={150} alt="Test" />
      </div>
      <div className="ml-auto space-x-4 items-center">
        <Link href={"/login"} className="tracking-wider">
          Login
        </Link>
        <Link
          href={"/register"}
          className="p-3 bg-white bg-opacity-30 rounded-full tracking-wider hover:bg-opacity-15"
        >
          Registration
        </Link>
      </div>
    </div>
  );
};

export default LandingHeader;
