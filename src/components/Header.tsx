import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Header = () => {
  return (
    <div className="bg-[#272f3b] py-2">
        <header className="container mx-auto flex justify-between items-center">
            <img className="rounded-full" src="https://placehold.co/50" alt="" />


            <form className="flex rounded-4xl bg-[#3f4247] items-center p-2 gap-2 select-none w-70">
                <HiMagnifyingGlass color="#99a1af"/>
                <input className="bg-transparent outline-0 text-sm placeholder-gray-400 text-gray-400 w-full" placeholder="Search..." type="search" />
            </form>



            <div className="flex justify-center gap-6 items-center">
                <button className="bg-gray-700 rounded-full w-8 h-8 flex justify-center items-center"><FaRegBell size={20} color="#99a1af"/></button>
                <div className="flex justify-center items-center gap-2">
                    <MdOutlineWbSunny size={20} color="#99a1af"/>
                    <button className="w-10 h-4 bg-gray-500 rounded-4xl"><div className="bg-gray-200 w-4 h-4 rounded-full cursor-pointer"></div></button>
                    <IoMoonOutline size={20} color="#99a1af"/>
                </div>

                <button className="flex items-center">
                    <img className="rounded-full" src="https://placehold.co/45" alt="" />
                    <MdKeyboardArrowDown size={22} color="#99a1af"/>
                </button>
            </div>
        </header>
    </div>
  )
}
