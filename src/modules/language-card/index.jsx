import Image from "next/image";

const LanguageCard = () => {
  return (
    <div className="w-1/6 flex flex-col space-y-4 border border-slate-100 text-center p-3 mb-2 ">
      <div>
        <Image src={"/js.png"} width={100} height={100} className="m-auto hover:bg-slate-200" />
      </div>
     
      <div className="bg-slate-200">
        <div className="font-semibold text-lg">JavaScript</div>
        <div className="">Language for the innovators</div>
      </div>
    </div>
  );
};

export default LanguageCard;
