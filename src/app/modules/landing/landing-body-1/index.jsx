import Image from "next/image";
import Button from "../../button";
const LandingBodyFirst = () => {
  return (
    <div className="flex px-16 items-center bg-gradient-to-r from-[#471da3] to-[#643bbd] leading-7 h-[500px]">
      <div className="justify-center flex flex-col  ">
        <p className="font-bold text-5xl text-left mb-2">Play to Enjoy!</p>
        <p className="font-bold text-5xl text-left mb-2">Welcome to Quizzer</p>
        <p className=" text-left">
          Quizzer is a quiz playing platform which allows you to play quiz{" "}
        </p>
        <p className=" text-left">on your favourite programming language</p>
        <Button
          variant="primary"
          className="uppercase mt-5 flex w-1/3 items-center space-x-2"
        >
          <Image src={"/play.png"} height={25} width={25}></Image>
          <p>Play Now</p>
        </Button>
      </div>
      <div className="justify-center flex flex-col ml-auto">
        <Image
          src={"/trophy.png"}
          width={400}
          height={400}
          alt="Test"
          className="origin-bottom -rotate-12"
        />
      </div>
    </div>
  );
};

export default LandingBodyFirst;
