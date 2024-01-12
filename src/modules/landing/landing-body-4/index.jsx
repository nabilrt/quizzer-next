import Image from "next/image";
const LandingBodyPart4 = () => {
  return (
    <div className="flex flex-col space-y-4 text-black px-32 py-6 m-auto">
      <div className="">
        <p className="font-bold text-4xl">Here's how it works!</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          placerat aliquam metus et posuere.Fusce aliquam mollis eros,
        </p>
        <p>
          vel fermentum neque. Suspendisse in orci at urna posuere consequat
          eget a arcu.
        </p>
      </div>
      <div className="flex space-x-3 ">
        <div className="flex flex-col space-y-3 bg-[#eddd4a] rounded-lg pb-4">
          <div>
            <Image
              src={"/exam1.jpg"}
              height={300}
              width={500}
              alt="Gift"
              className="bg-cover rounded-t-lg"
            />
          </div>
          <div className="bg-white p-2 rounded-full mx-5 ">
            <p className="font-semibold text-center">Step 1</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-lg">Complete Registration</p>
            <p className="">Do Registration in our portal first, to continue</p>
            <p className="">then proceed</p>
          </div>
        </div>
        <div className="flex flex-col space-y-3 bg-[#eddd4a] rounded-lg pb-4">
          <div>
            <Image
              src={"/exam2.jpg"}
              height={300}
              width={500}
              alt="Gift"
              className="bg-cover rounded-t-lg"
            />
          </div>
          <div className="bg-white p-2 rounded-full mx-5 ">
            <p className="font-semibold text-center">Step 2</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-lg">Choose Language</p>
            <p className="">Choose your favourite language first</p>
            <p className="">then choose topic</p>
          </div>
        </div>
        <div className="flex flex-col space-y-3 bg-[#eddd4a] rounded-lg pb-4">
          <div>
            <Image
              src={"/exam1.jpg"}
              height={300}
              width={500}
              alt="Gift"
              className="bg-cover rounded-t-lg"
            />
          </div>
          <div className="bg-white p-2 rounded-full mx-5 ">
            <p className="font-semibold text-center">Step 3</p>
          </div>
          <div className="text-center ">
            <p className="font-semibold text-lg">Take Quiz</p>
            <p className="">After choosing language and topic your will</p>
            <p className="">be redirected to the quiz page then proceed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingBodyPart4;
