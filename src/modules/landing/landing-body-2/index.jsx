import Image from "next/image";

const LandingBodyPart2 = () => {
  return (
    <div className="flex space-x-3 p-4 px-6 text-black m-auto rounded-lg bg-white w-3/5 absolute top-[500px] left-[30px] right-[30px] shadow-xl">
      <div className="flex flex-col border-2 border-[#d2bef9]  p-4 rounded-2xl w-1/3 hover:bg-[#f5f0ff]">
        <Image src={"/gift.png"} height={100} width={100} alt="Gift" />
        <p className="text-left font-bold text-lg">Daily Rewards</p>
        <div className="flex space-x-1 items-center">
          <p className="text-left">Start Now</p>
          <Image
            src={"/right.png"}
            height={16}
            width={16}
            alt="Right"
            className="mt-1 hover:underline cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col border-[#d2bef9] border-2 p-4 rounded-2xl w-1/3 hover:bg-[#f5f0ff]">
        <Image src={"/achievement.png"} height={100} width={100} alt="Gift" />
        <p className="text-left font-bold text-lg">Achievements</p>
        <div className="flex space-x-1 items-center">
          <p className="text-left">Start Now</p>
          <Image
            src={"/right.png"}
            height={16}
            width={16}
            alt="Right"
            className="mt-1 hover:underline cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col border-[#d2bef9] border-2 p-4 rounded-2xl w-1/3 hover:bg-[#f5f0ff]">
        <Image src={"/king.png"} height={100} width={100} alt="Gift" />
        <p className="text-left font-bold text-lg">Play Like King</p>
        <div className="flex space-x-1 items-center">
          <p className="text-left">Start Now</p>
          <Image
            src={"/right.png"}
            height={16}
            width={16}
            alt="Right"
            className="mt-1 hover:underline cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingBodyPart2;
