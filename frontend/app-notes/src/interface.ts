export interface Note{
    _id: string
    title: string
    description: string
    priority: string
    created_at: string
    updated_at: string
}

export interface ModalContextType {
    noteToEdit: Note|null
    createNoteModalOpen: boolean,    
    showCreateNoteModal: () => void
    closeCreateNoteModal: () => void
    setNoteToEditInModal: (note: Note|null) => void
}