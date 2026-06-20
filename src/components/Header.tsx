import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";


export const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchRef = useRef<HTMLFormElement>(null);

    const {isDark, toggleTheme} = useContext(ThemeContext)

    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  return (
    <div className="dark:bg-[#272f3b] bg-[#ccc] py-2 fixed w-full z-50">
        <header className="container mx-auto flex justify-between items-center">
            <img className="rounded-full hidden md:block" src="https://placehold.co/50" alt="" />


            <form ref={searchRef} className={`flex rounded-4xl dark:bg-[#3f4247] bg-white items-center p-2 gap-2 select-none w-10 md:w-70 ml-[2%] md:ml-0 transition-all ${isSearchOpen ? "w-50" : ''}`}>
                    <HiMagnifyingGlass className="shrink-0" onClick={()=> setIsSearchOpen(true)} color="#99a1af"/>
                <input className={`bg-transparent outline-0 text-sm placeholder-gray-400 dark:text-gray-400 w-full`} placeholder="Search..." type="search" />
            </form>



            <div className="flex justify-center gap-6 items-center">
                <button className="dark:bg-gray-700 bg-[#eee] rounded-full w-8 h-8 flex justify-center items-center"><FaRegBell size={20} color={`${isDark ? "#99a1af" : "black"}`}/></button>

                {/* dark/light mode toggle */}
                <div onClick={toggleTheme} className="flex justify-center items-center gap-2">
                    <MdOutlineWbSunny size={20} className={`${isDark ? "": "hidden md:block"}`} color={`${isDark? "#99a1af": "black"}`}/>
                    <button className="hidden md:block w-10 h-4 relative bg-gray-500 rounded-4xl cursor-pointer"><div className={`top-0 dark:right-0 absolute bg-gray-200 w-4 h-4 rounded-full cursor-pointer`}></div></button>
                    <IoMoonOutline size={20} className={`${isDark ? "hidden md:block": ""}`} color={`${isDark? "white": "#99a1af"}`} />
                </div>

                <button className="flex items-center cursor-pointer">
                    <img className="rounded-full" src="https://placehold.co/45" alt="" />
                    <MdKeyboardArrowDown size={22} color="#99a1af"/>
                </button>
            </div>
        </header>
        <hr className="relative -bottom-2 dark:text-gray-700 text-white"/>
    </div>
  )
}
