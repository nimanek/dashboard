import { MdKeyboardArrowDown } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { BsTag } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdOutlineInsertChart } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { PiFire } from "react-icons/pi";
import { IoDiamondOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";


export const Sidebar = () => {
  return (
    <div>
        <aside className='dark:bg-[#272f3b] bg-[#c6c6c6] pt-22 dark:text-mist-300'>
            <nav className='w-[90%] ml-4'>
                <p className='text-sm dark:text-mist-400 text-mist-700 mb-2'>Manage listings</p>
                <ul className='flex flex-col gap-2'>
                    <li className='rounded-sm px-4 py-1 text-sm hover:text-black hover:bg-[#e1e1e1] dark:hover:text-cyan-600 dark:hover:bg-[#4a525d]'>
                        <a className="flex justify-between items-center py-2" href="#">
                            <div className="flex items-center gap-2">
                                <RxDashboard />
                                <span>Dashboard</span> 
                            </div>
                        </a>
                    </li>
                    <li className='rounded-sm px-4 py-1 text-sm hover:text-black hover:bg-[#e1e1e1] dark:hover:text-cyan-600 dark:hover:bg-[#4a525d]'>
                        <a className="flex justify-between items-center py-2" href="#">
                            <div className="flex items-center gap-2">
                                <BsTag />
                                <span>Products</span>   
                            </div>
                            <MdKeyboardArrowDown/>
                        </a>
                    </li>
                   <li className='rounded-sm px-4 py-1 text-sm hover:text-black hover:bg-[#e1e1e1] dark:hover:text-cyan-600 dark:hover:bg-[#4a525d]'>
                        <a className="flex justify-between items-center py-2" href="#">
                            <div className="flex items-center gap-2">
                                <BsHandbag />
                                <span>Orders</span> 
                            </div>
                            <MdKeyboardArrowDown/>
                        </a>
                    </li>
                    <li className='rounded-sm px-4 py-1 text-sm hover:text-black hover:bg-[#e1e1e1] dark:hover:text-cyan-600 dark:hover:bg-[#4a525d]'>
                        <a className="flex justify-between items-center py-2" href="#">
                            <div className="flex items-center gap-2">
                                <CgProfile />
                                <span>Customers</span> 
                            </div>
                            <MdKeyboardArrowDown/>
                        </a>
                    </li>
                    <li className='rounded-sm px-4 py-1 text-sm hover:text-black hover:bg-[#e1e1e1] dark:hover:text-cyan-600 dark:hover:bg-[#4a525d]'>
                        <a className="flex justify-between items-center py-2" href="#">
                            <div className="flex items-center gap-2">
                                <MdOutlineInsertChart />
                                <span>Statics</span> 
                            </div>
                        </a>
                    </li>
                    <li className='rounded-sm px-4 py-1 text-sm hover:text-black hover:bg-[#e1e1e1] dark:hover:text-cyan-600 dark:hover:bg-[#4a525d]'>
                        <a className="flex justify-between items-center py-2" href="#">
                            <div className="flex items-center gap-2">
                                <IoChatbubbleOutline />
                                <span>Reviews</span> 
                            </div>
                        </a>
                    </li>
                    <li className='rounded-sm px-4 py-1 text-sm hover:text-black hover:bg-[#e1e1e1] dark:hover:text-cyan-600 dark:hover:bg-[#4a525d]'>
                        <a className="flex justify-between items-center py-2" href="#">
                            <div className="flex items-center gap-2">
                                <IoWalletOutline />
                                <span>Transactions</span> 
                            </div>
                        </a>
                    </li>
                    <li className='rounded-sm px-4 py-1 text-sm hover:text-black hover:bg-[#e1e1e1] dark:hover:text-cyan-600 dark:hover:bg-[#4a525d]'>
                        <a className="flex justify-between items-center py-2" href="#">
                            <div className="flex items-center gap-2">
                                <ImProfile />
                                <span>Sellers</span> 
                            </div>
                        </a>
                    </li>
                    <li className='rounded-sm px-4 py-1 text-sm hover:text-black hover:bg-[#e1e1e1] dark:hover:text-cyan-600 dark:hover:bg-[#4a525d]'>
                        <a className="flex justify-between items-center py-2" href="#">
                            <div className="flex items-center gap-2">
                                <PiFire />
                                <span>Hot offers</span> 
                            </div>
                        </a>
                    </li>
                    <li className='rounded-sm px-4 py-1 text-sm hover:text-black hover:bg-[#e1e1e1] dark:hover:text-cyan-600 dark:hover:bg-[#4a525d]'>
                        <a className="flex justify-between items-center py-2" href="#">
                            <div className="flex items-center gap-2">
                                <IoDiamondOutline />
                                <span>Appearance</span> 
                            </div>
                            <MdKeyboardArrowDown/>
                        </a>
                    </li>
                    <li className='rounded-sm px-4 py-1 text-sm hover:text-black hover:bg-[#e1e1e1] dark:hover:text-cyan-600 dark:hover:bg-[#4a525d]'>
                        <a className="flex justify-between items-center py-2" href="#">
                            <div className="flex items-center gap-2">
                                <IoSettingsOutline />
                                <span>Settings</span> 
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    </div>
  )
}
