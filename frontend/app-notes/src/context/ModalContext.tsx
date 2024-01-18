import { createContext, useState } from "react";
import { ModalContextType, Note } from "../interface";

export const ModalContext = createContext<ModalContextType>({
  noteToEdit: null,
  createNoteModalOpen: false,
  showCreateNoteModal: () => {},
  closeCreateNoteModal: () => {},
  setNoteToEditInModal: () => {},
});

type Props = {
  children: React.ReactNode;
};

const ModalProvider = ({ children }: Props) => {
  const [noteToEdit, setNoteToEdit] = useState<Note | null>(null);
  const [createNoteModalOpen, setCreateNoteModalOpen] = useState(false);

  function showCreateNoteModal() {
    setCreateNoteModalOpen(true);
  }

  function closeCreateNoteModal() {
    setCreateNoteModalOpen(false);
  }

  function setNoteToEditInModal(note: Note | null) {
    setNoteToEdit(note);
  }

  return (
    <ModalContext.Provider
      value={{
        noteToEdit,
        createNoteModalOpen,
        showCreateNoteModal,
        closeCreateNoteModal,
        setNoteToEditInModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;