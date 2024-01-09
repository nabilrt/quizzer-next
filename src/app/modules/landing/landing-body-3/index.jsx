import Image from "next/image";

const LandingBodyPart3 = () => {
  return (
    <div className="mt-52 flex flex-col space-y-2 p-4 px-6 py-6 w-full m-auto bg-[#f5f0ff] ">
      <div className="text-center text-black mb-4">
        <p className="font-bold text-4xl ">Play, Learn and Earn Bonus</p>
        <p className="text-xl text-gray-400">Check yourself, earn yourself</p>
      </div>
      <div className="flex space-x-4 w-3/5 m-auto justify-around ">
        <div className="bg-[url('/test1.jpg')] bg-cover w-[400px] h-[500px] rounded-lg p-4">
          <div>
            <p className="font-semibold text-2xl">Test Your IQ!</p>
          </div>
        </div>
        <div className="bg-[url('/test2.jpg')] bg-cover w-[400px] h-[500px] rounded-lg ">
          <div className="bg-slate-300 bg-transparent p-4 ">
            <p className="font-semibold text-2xl">Learn!</p>
          </div>
        </div>
        <div className="bg-[url('/test3.jpg')] bg-cover w-[400px] h-[500px] rounded-lg p-4">
          <div>
            <p className="font-semibold text-2xl">Test Before Play!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingBodyPart3;
