import { useState } from "react";
import Modal from "./common/Modal";
import { createNote } from "../services";
import FormGroup from "./common/FormGroup";
import FormLabel from "./common/FormLabel";
import FormInput from "./common/FormInput";
import FormTextArea from "./common/FormTextArea";

type Props = {
  isOpen: boolean;
  onCreate: () => void;
  onClose: () => void;
};

const CreateNoteModal = ({ isOpen, onCreate, onClose }: Props) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  function handleInputOnChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleAccept() {
    try {
      await createNote(form);
      onCreate();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      title="Create Note"
      onAccept={handleAccept}
      onClose={onClose}
    >
      <FormGroup>
        <FormLabel htmlFor="title">Title</FormLabel>
        <FormInput
          type="text"
          name="title"
          id="title"
          onChange={handleInputOnChange}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="description">Description</FormLabel>
        <FormTextArea
          name="description"
          id="description"
          rows={5}
          onChange={handleInputOnChange}
        ></FormTextArea>
      </FormGroup>
    </Modal>
  );
};

export default CreateNoteModal;