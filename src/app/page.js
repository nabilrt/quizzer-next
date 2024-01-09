import LandingHeader from "./modules/landing/landing-header";
import LandingBodyFirst from "./modules/landing/landing-body-1";
import LandingBodyPart2 from "./modules/landing/landing-body-2";
import LandingBodyPart3 from "./modules/landing/landing-body-3";
import LandingBodyPart4 from "./modules/landing/landing-body-4";
import LandingFooter from "./modules/landing/landing-footer";

export default function Home() {
  return (
    <div className=" flex flex-col m-auto  text-white">
      <LandingHeader />
      <LandingBodyFirst />
      <LandingBodyPart2 />
      <LandingBodyPart3 />
      <LandingBodyPart4 />
      <LandingFooter />
    </div>
  );
}
