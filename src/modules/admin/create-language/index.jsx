"use client";
import InputButton from "@/modules/input-button";
import CreateLanguageModal from "@/modules/modals/create-language";
import { Fragment, useState } from "react";

const CreateLanguage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <InputButton className="w-1/12" onClick={() => setShowModal(!showModal)}>
        Add Language
      </InputButton>
      <CreateLanguageModal
        isModalOpen={showModal}
        setIsModalOpen={setShowModal}
      />
    </Fragment>
  );
};

export default CreateLanguage;
