import { useState } from "react"
import Type from "./Type"
import { useData } from "../contexts/useData"

export default function Cart({ description, title, type, completed }) {
    const { setAllNote, setOpenUpdateForm, setItem, setDesc, setDeleteCart } = useData()
    const [done, setDone] = useState(false)

    function handelClick() {

        setDeleteCart(true)
        setDesc(description)
    }
    function handelDoneTask() {
        setAllNote((allNote) => allNote.map((item) => item.description === description ? {
            ...item,
            completed: !done
        } : item))
        setDone(done => !done)
    }

    function handelUpdateNote() {
        setOpenUpdateForm(true)
        const newItem = {
            type,
            title,
            description,
            completed: false,
        }
        setItem(newItem)
    }
    const date = new Date().toLocaleDateString()
    if (completed) return <div className={`w-[380px] h-[245px] shadow-xl   'bg-gray-500/10'   rounded-[7px] bg-stone-500/20  mt-5 sm:mt-10 sm:ml-10 `}>
        <div className='flex justify-between items-center px-2 py-4'>

            <Type type={type} done={true}> {type} </Type>
            <div className='space-x-4 flex'>
                <div className="hover:bg-stone-700/20 px-1 cursor-pointer rounded-full   transition-all duration-300">
                    <input type='checkbox' className={`${completed ? 'accent-slate-700' : ""} cursor-pointer`} checked={completed} onClick={() => handelDoneTask()} />
                </div>
                <div className="hover:bg-stone-700/20 px-1 cursor-pointer rounded-full   transition-all duration-300">
                    <i className="fa-solid fa-trash icon" onClick={handelClick} ></i>
                </div>
                <div className="hover:bg-stone-700/20 px-1 cursor-pointer rounded-full   transition-all duration-300">
                    <i className="fa-solid fa-pen icon" onClick={handelUpdateNote} ></i>
                </div>
            </div>
        </div>
        <div className='px-4 space-y-2'>
            <h2 className={`font-bold ${true && 'line-through'} `}>{title}</h2>
            <p className={`text-xs font-semibold ${true && 'line-through'}`}>{description}</p>
            <div className='text-right px-4 font-semibold text-sm'>
                <p>{date}</p>
            </div>
        </div>
    </div>

    return <div className={`w-[380px] h-[245px] shadow-xl    rounded-[7px] bg-white mt-5 sm:mt-10 sm:ml-10`}>
        <div className='flex justify-between items-center px-2 py-4'>

            <Type type={type} done={false}> {type} </Type>
            <div className='flex space-x-4'>
                <div className="hover:bg-stone-700/20 px-1 cursor-pointer rounded-full   transition-all duration-300">
                    <input type='checkbox' className="cursor-pointer" onClick={() => handelDoneTask()} />
                </div>
                <div className="hover:bg-stone-700/20 px-1 cursor-pointer rounded-full   transition-all duration-300">
                    <i className="fa-solid fa-trash icon " onClick={handelClick} ></i>
                </div>
                <div className="hover:bg-stone-700/20 px-1 cursor-pointer rounded-full  transition-all duration-300">
                    <i className="fa-solid fa-pen icon" onClick={handelUpdateNote} ></i>
                </div>
            </div>
        </div>
        <div className='px-4 space-y-2'>
            <h2 className={`font-bold ${false && 'line-through'} `}>{title}</h2>
            <div>
                <p className={`text-xs font-semibold ${false && 'line-through'}`}>{description}</p>
            </div>
            <div className='text-right px-4 font-semibold text-sm'>
                <p>{date}</p>
            </div>
        </div>
    </div>
}