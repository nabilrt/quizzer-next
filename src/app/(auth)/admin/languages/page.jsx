import CreateLanguage from "@/modules/admin/create-language";
import LanguageCard from "@/modules/language-card";

const Languages = () => {
  return (
    <div className="flex flex-col space-y-4  p-2">
      <p className="text-xl font-semibold text-orange-500">Languages</p>
      <hr className="bg-blue-500" />
      <div className="flex justify-between px-2">
        <div className="font-semibold text-xl">All Languages</div>
        <CreateLanguage />
      </div>
      <div className="flex  flex-wrap  p-2 items-center w-full ">
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
      </div>
    </div>
  );
};

export default Languages;
