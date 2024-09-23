import { useState } from "react"
import { useData } from "../contexts/useData"

export default function Form() {
    const { setOpenForm, setAllNote, allNote } = useData()
    const [type, setType] = useState('business')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const wordCount = description.trim().split(/\s+/).length;

    function handelSubmit(e) {
        e.preventDefault()
        const newItem = {
            type,
            title,
            description,
            completed: false,
        }
        setAllNote([...allNote, newItem])
        setOpenForm(false)
    }
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-500/50">
            <div className="w-[96%] sm:max-w-[600px] rounded-lg shadow-lg bg-slate-40 bg-stone-100">
                <form className="px-6 py-2 " onSubmit={handelSubmit} >
                    <div className="flex  justify-between items-center  py-2">
                        <h2 className="font-bold text-xl">Add note</h2>
                        <span className="font-bold text-xl cursor-pointer" onClick={() => setOpenForm(false)} >&times;</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 ">
                        <div>
                            <label htmlFor="title" className="block">Title</label>
                            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} id="title" className="border-2 border-stone-500 focus:border-blue-500 focus:border-2 px-2  w-[345px] sm:w-[270px] outline-none py-0.5" placeholder="Add title"></input>
                        </div>
                        <div>
                            <label htmlFor="category" className="block">Category</label>
                            <select id="category" className=" focus:border-blue-500 focus:border-2  px-2 py-0.5 border-2  w-[345px] sm:w-[270px]  outline-none border-stone-500" value={type} onChange={(e) => setType(e.target.value)}>
                                <option value='business'>Business</option>
                                <option value='personal'>Personal</option>
                                <option value='home'>Home</option>
                            </select>
                        </div>
                    </div>
                    <div className="py-4">
                        <div className="flex justify-between">
                            <label htmlFor="description" className="block" >Description (optional)</label>
                            <span>{wordCount}/40</span>
                        </div>
                        <textarea type="text" disabled={wordCount === 40} value={description} onChange={(e) => setDescription(e.target.value)} id="description" className="px-2 focus:border-blue-500 focus:border-2 outline-none py-1 w-[100%] resize-none h-[120px] border-2 border-stone-500" placeholder="Add description"></textarea>
                    </div>
                    <div className="py-2 space-x-4 text-right  ">
                        <button className="font-semibold cursor-pointer transition-all duration-300 hover:text-stone-500" onClick={(e) => { setOpenForm(false); }} >Cancel</button>
                        <button className="text-white cursor-pointer transition-all duration-300 hover:bg-blue-400 bg-blue-500 rounded-full cursor-pointer px-3 py-1">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

