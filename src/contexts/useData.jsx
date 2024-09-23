import { createContext, useContext, useState } from "react";


const DataContext = createContext();

function DataProvider({ children }) {
    const [allNote, setAllNote] = useState(function () {
        const storedValue = localStorage.getItem('note');
        return JSON.parse(storedValue)
    }
    )
    const [desc, setDesc] = useState('');
    const [item, setItem] = useState({})
    const [v, setV] = useState(false)
    const [openForm, setOpenForm] = useState(false)
    const [openUpdateForm, setOpenUpdateForm] = useState(false)
    const [deleteCart, setDeleteCart] = useState(false)
    const [show, setShow] = useState(false)
    const [searchQuery, setSearchQuery] = useState("");
    const searchResult = searchQuery.length > 0 ? allNote.filter((note) => `${note.title}`.toLowerCase().includes(searchQuery.toLowerCase())) : allNote
    return <DataContext.Provider
        value={{
            allNote, setAllNote, desc, setDesc, item, setItem, v, setV, openForm, setOpenForm
            , openUpdateForm, setOpenUpdateForm, deleteCart, setDeleteCart, show, setShow, searchQuery, setSearchQuery, searchResult
        }}
    >
        {children}
    </DataContext.Provider>
}

function useData() {
    const context = useContext(DataContext)
    if (context === 'undefined') throw new Error('Using Value Outside the Scope of the Context')
    return context
}
export { useData, DataProvider }
