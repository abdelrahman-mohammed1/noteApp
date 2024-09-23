
import { NavLink } from "react-router-dom";
import { useData } from "../contexts/useData";
export default function Navigation() {

    const { show, setShow } = useData()
    function handelClick() {
        setShow((show) => !show)

    }
    return (

        <>
            <h1 className='font-bold text-2xl py-7 px-4 sm:px-20'>Your notes</h1>
            <div>
                <div className=' flex  flex-wrap gap-3 justify-between items-center px-4 sm:px-20'>
                    <div className="border-b-2 border-stone-400 pb-2" >
                        <ul className='flex gap-4'>
                            <li>
                                <NavLink to="/" className='li'>All</NavLink>
                            </li>
                            <li>
                                <NavLink to="/personal" className='li' >Personal</NavLink>
                            </li>
                            <li>
                                <NavLink to="/home" className='li'>Home</NavLink>
                            </li>

                            <li>
                                <NavLink to="/business" className='li'>Business</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='sm:space-x-4  sm:w-[245px]   w-[100%] pt-[15px] text-right  '>
                        <span className="hover:bg-stone-700/20  px-1 cursor-pointer rounded-full  transition-all duration-300" >
                            <input type='checkbox' className={`check ${show ? 'accent-slate-700' : ""} cursor-pointer   `} defaultChecked={show} onClick={handelClick} />
                        </span>
                        <span >Show only completed notes</span>
                    </div>
                </div>

            </div>

        </>
    )
}
