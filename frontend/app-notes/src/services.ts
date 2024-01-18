const API_URL = import.meta.env.VITE_API_URL

// Get notes from API
export async function getApiNotes() {
    try {
        const response = await fetch(`${API_URL}/api/notes`)
        const data = await response.json()
        return data;
    }catch(error) {
        console.error(error)
    }
}

// Create Note
export async function createNote(payload: unknown) {
    try {
        const response = await fetch(`${API_URL}/api/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        const data = await response.json()        
        return data;
    } catch (error) {
        console.error(error)
    }
}

// Edit Note
export async function editNote(id: string, payload: unknown) {
    try{
        const response = await fetch(`${API_URL}/api/notes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        const data = await response.json()        
        return data
    }catch(error) {
        console.error(error)
    }
}

// Delete Note
export async function deleteNote(id: string) {
    try{
        const response = await fetch(`${API_URL}/api/notes/${id}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        return data;
    }catch(error){
        console.error(error)
    }
}