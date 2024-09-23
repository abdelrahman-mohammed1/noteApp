

import search from '../assets/search-icon.svg'
import { useData } from '../contexts/useData'
export default function Header() {
    const { setOpenForm, searchQuery, setSearchQuery } = useData()

    return (
        <div className="bg-white h-17 py-4 shadow-xl">
            <div className="  flex justify-center items-center gap-3 h-[100%] relative ">


                <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="search" placeholder='Search' className="w-[60%] py-1 outline-none rounded-lg relative px-9  sm:px-12  placeholder:text-stone-500 placeholder:text-medium bg-stone-300" />

                <img src={search} alt="" className='absolute bottom-2.2 left-[13%]  w-4  sm:left-[18%] sm:w-4 font-semibold' />


                <button onClick={() => setOpenForm(true)} className="text-white bg-blue-500 rounded-full cursor-pointer px-3 py-1">+ Add</button>
            </div>
        </div>
    )
}
// md:flex-col sm:flex sm:justify-center sm:items-center gap-3 h-[100%] relative