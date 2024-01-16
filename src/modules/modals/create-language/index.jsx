"use client";

import Input from "@/modules/input";
import InputButton from "@/modules/input-button";

const CreateLanguageModal = ({ isModalOpen, setIsModalOpen }) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0  flex  items-center justify-center rounded-md  bg-white bg-opacity-25  backdrop-blur-sm ">
      <div className="m-auto flex h-1/2 w-1/2 flex-col space-y-4 rounded-md border border-blue-200 px-6 py-6  bg-[#ffffff] p-4 ">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-center">
            Create Language
          </h1>
          <InputButton onClick={() => setIsModalOpen(!isModalOpen)}>
            Close
          </InputButton>
        </div>
        <Input placeholder="Language Name" />
        <Input placeholder="Something in single line about the language..." />
        <div className="flex flex-col space-y-2">
          <label className="text-xl font-semibold">Avatar</label>
          <Input type="file" />
        </div>
        <InputButton className="w-1/6 m-auto">Create</InputButton>
      </div>
    </div>
  );
};

export default CreateLanguageModal;
