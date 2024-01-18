import { useContext, useEffect, useState } from "react";
import { Note } from "./interface";
import { deleteNote, getApiNotes } from "./services";
import ApplicationTitle from "./components/ApplicationTitle";
import SearchInput from "./components/SearchInput";
import Header from "./components/Header";
import CardNoteGrid from "./components/CardNoteGrid";
import CardNote from "./components/CardNote";
import CreateNoteModal from "./components/CreateNoteModal";
import EditNoteModal from "./components/EditNodeModal";
import { ModalContext } from "./context/ModalContext";

const Home = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
  const [searchTerm, setSerarchTerm] = useState("");

  const {
    noteToEdit,
    createNoteModalOpen,
    closeCreateNoteModal,
    setNoteToEditInModal,
  } = useContext(ModalContext);
  
  async function getNotes() {
    const notes = await getApiNotes();
    setNotes(notes);
  }

  function getFilteredNotes() {
    const filteredNotes = notes.filter((note) => {
      return (
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    return filteredNotes;
  }

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filteredNotes = getFilteredNotes();
      setFilteredNotes(filteredNotes);
    }
  }, [searchTerm]);

  async function handleOnCreate() {
    closeCreateNoteModal();
    await getNotes();
  }

  async function handleOnEdit() {
    setNoteToEditInModal(null);
    await getNotes();
  }

  function handleOnEditNote(note: Note) {
    setNoteToEditInModal(note);
  }

  async function handleOnRemoveNote(id: string) {
    try {
      await deleteNote(id);
      await getNotes();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>
        <ApplicationTitle />
      </div>
      <div>
        <SearchInput onSearch={(value: string) => setSerarchTerm(value)} />
      </div>
      <Header />
      <CardNoteGrid>
        {(filteredNotes.length > 0 && searchTerm !== ""
          ? [...filteredNotes]
          : [...notes]
        ).map((note) => (
          <CardNote
            key={note._id}
            title={note.title}
            description={note.description}
            onEdit={() => handleOnEditNote(note)}
            onRemove={() => handleOnRemoveNote(note._id)}
          />
        ))}
      </CardNoteGrid>

      <CreateNoteModal
        isOpen={createNoteModalOpen}
        onClose={closeCreateNoteModal}
        onCreate={handleOnCreate}
      />
      {noteToEdit !== null && (
        <EditNoteModal
          note={noteToEdit}
          isOpen
          onClose={() => setNoteToEditInModal(null)}
          onEdit={handleOnEdit}
        />
      )}
    </>
  );
};

export default Home;