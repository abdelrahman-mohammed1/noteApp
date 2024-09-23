import { useData } from "../contexts/useData"


export default function DeleteCart() {
    const { allNote, desc, setDeleteCart, setAllNote } = useData()
    function handelDelete() {
        setAllNote(allNote.filter((item) => item.description !== desc))
        setDeleteCart(false)
    }
    return (
        <div className="absolute inset-0 bg-slate-400/50 flex items-center justify-center">
            <div className="w-[80%] h-[170px] px-5 py-6 bg-slate-100 rounded-lg">
                <div className="mb-2  flex items-center justify-between">
                    <span className="font-bold text-lg">Delete note</span>
                    <span onClick={() => setDeleteCart(false)} className="text-2xl font-semibold cursor-pointer" >&times;</span>
                </div>
                <h2 className="mb-4 text-medium">Are you Sure to Delete This Note ?</h2>
                <div className="text-right space-x-3">
                    <button onClick={() => setDeleteCart(false)} className="  hover:text-stone-400 transition-all duration-300 cursor-pointer font-semibold">Cancel</button>
                    <button onClick={handelDelete} className="text-red-100 bg-red-600  hover:bg-red-300 hover:text-red-500 transition-all duration-300    px-3 py-2 cursor-pointer  rounded-full  " >Delete</button>
                </div>
            </div>
        </div>
    )
}
