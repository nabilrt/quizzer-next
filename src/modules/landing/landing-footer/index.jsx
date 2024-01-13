import Image from "next/image";
const LandingFooter = () => {
  return (
    <div className="mt-5 bg-[#131220] flex px-16 py-12 text-white">
      <div className="flex flex-col text-sm">
        <Image
          src={"/quizzer.png"}
          width={150}
          height={150}
          alt="Test"
          className="mb-2"
        />
        <p>Improve your skills anytime,</p>
        <p>anywhere, Start your happy journey</p>
        <p>with our Quizzer</p>
        <hr></hr>
        <p className="mt-2">
          &#169; 2024 Copyright . Quizzer . All rights reserved
        </p>
      </div>

      <div className="ml-auto">
        <p className="text-xl">Follow us</p>
        <div className="flex space-x-3 mt-2">
          <Image
            src={"/facebook.png"}
            width={30}
            height={30}
            alt="Test"
            className="mb-2"
          />
          <Image
            src={"/twitter.png"}
            width={30}
            height={30}
            alt="Test"
            className="mb-2"
          />
          <Image
            src={"/youtube.png"}
            width={30}
            height={30}
            alt="Test"
            className="mb-2"
          />
          <Image
            src={"/instagram.png"}
            width={30}
            height={30}
            alt="Test"
            className="mb-2"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
