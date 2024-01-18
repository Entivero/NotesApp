import { useState } from "react";
import Modal from "./common/Modal";
import { editNote } from "../services";
import FormGroup from "./common/FormGroup";
import FormLabel from "./common/FormLabel";
import FormInput from "./common/FormInput";
import FormTextArea from "./common/FormTextArea";
import { Note } from "../interface";

type Props = {
  note: Note;
  isOpen: boolean;
  onEdit: () => void;
  onClose: () => void;
};

const EditNoteModal = ({ note, isOpen, onEdit, onClose }: Props) => {
  const [form, setForm] = useState({
    title: note.title,
    description: note.description,
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
      const id = note._id;
      await editNote(id, form);
      onEdit();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      title="Edit Note"
      onAccept={handleAccept}
      onClose={onClose}
    >
      <FormGroup>
        <FormLabel htmlFor="title">Title</FormLabel>
        <FormInput
          type="text"
          name="title"
          id="title"
          value={form.title}
          onChange={handleInputOnChange}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="description">Description</FormLabel>
        <FormTextArea
          name="description"
          id="description"
          rows={5}
          value={form.description}
          onChange={handleInputOnChange}
        />
      </FormGroup>
    </Modal>
  );
};

export default EditNoteModal;