import { useState } from "react";
import { useData } from "../contexts/useData";


export default function FormUpdate() {
    const { setOpenUpdateForm, item, setAllNote } = useData()

    const [type, setType] = useState(item.type ? item.type : 'business')
    const [title, setTitle] = useState(item.title ? item.title : '')
    const [description, setDescription] = useState(item.description ? item.description : '')
    function handelUpdate(e) {
        e.preventDefault();
        setAllNote(alllNote => alllNote.map((note) => note.description === item.description ? {
            type,
            title,
            description
        } : note))
        setOpenUpdateForm(false)
    }
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-500/50">
            <div className="max-w-[600px] rounded-lg shadow-lg bg-slate-40 bg-stone-100">
                <form className="px-6 py-2 "   >
                    <div className="flex  justify-between items-center  py-2">
                        <h2 className="font-bold text-xl">Add note</h2>
                        <span className="font-bold text-xl cursor-pointer" onClick={() => setOpenUpdateForm(false)} >&times;</span>
                    </div>
                    <div className="flex justify-between flex-col sm:flex-row items-center gap-4 ">
                        <div>
                            <label htmlFor="title" className="block">Title</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="title" className="border-2 border-stone-500 px-2  w-[345px] sm:w-[270px] outline-none py-0.5" placeholder="Add title"></input>
                        </div>
                        <div>
                            <label htmlFor="category" className="block">Category</label>
                            <select id="category" className="  px-2 py-0.5 border-2  w-[345px] sm:w-[270px]  outline-none border-stone-500" value={type} onChange={(e) => setType(e.target.value)}>
                                <option value='business'>Business</option>
                                <option value='personal'>Personal</option>
                                <option value='home'>Home</option>
                            </select>
                        </div>
                    </div>
                    <div className="py-4">
                        <label htmlFor="description" className="block" >Description (optional)</label>
                        <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} id="description" className="px-2 outline-none py-1 w-[100%] resize-none h-[120px] border-2 border-stone-500" placeholder="Add description"></textarea>
                    </div>
                    <div className="py-2 space-x-4 text-right  ">
                        <button onClick={(e) => { e.preventDefault(); setOpenUpdateForm(false) }} className="font-semibold cursor-pointer transition-all duration-300 hover:text-stone-500"   >Cancel</button>
                        <button onClick={handelUpdate} className="text-white cursor-pointer transition-all duration-300 hover:bg-blue-400 bg-blue-500 rounded-full cursor-pointer px-3 py-1">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
