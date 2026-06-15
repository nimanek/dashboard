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
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
    const location = useLocation();
    const menuItems = [
        { path: "/", icon: <RxDashboard />, label: "Dashboard", subItems: [] },
        {
            path: "/products",
            icon: <BsTag />,
            label: "Products",
            subItems: ["All Products", "Add Product", "Categories"],
        },
        {
            path: "/orders",
            icon: <BsHandbag />,
            label: "Orders",
            subItems: ["All Orders", "Pending", "Completed"],
        },
        {
            path: "/customers",
            icon: <CgProfile />,
            label: "Customers",
            subItems: ["Remove Customer", "Add Customer"],
        },
        {
            path: "/statics",
            icon: <MdOutlineInsertChart />,
            label: "Statics",
            subItems: [],
        },
        {
            path: "/reviews",
            icon: <IoChatbubbleOutline />,
            label: "Reviews",
            subItems: [],
        },
        {
            path: "/transactions",
            icon: <IoWalletOutline />,
            label: "Transactions",
            subItems: [],
        },
        {
            path: "/sellers",
            icon: <ImProfile />,
            label: "Sellers",
            subItems: [],
        },
        {
            path: "/hot-offers",
            icon: <PiFire />,
            label: "Hot offers",
            subItems: [],
        },
        {
            path: "/appearance",
            icon: <IoDiamondOutline />,
            label: "Appearance",
            subItems: [],
        },
        {
            path: "/settings",
            icon: <IoSettingsOutline />,
            label: "Settings",
            subItems: ["Apearance", "Security"],
        },
    ];

    return (
        <div>
            <ul className="flex flex-col dark:bg-[#272f3b] bg-[#c6c6c6] gap-2 mt-17 p-2">
                <p className="text-sm dark:text-mist-400 text-mist-700 my-4">
                    Manage listings
                </p>
                {menuItems.map((item) => (
                    <li
                        key={item.path}
                        className={`rounded-sm px-4 py-1 text-sm text-[#47494b] dark:text-[#c2c2c2] hover:text-[#2d2d2d] hover:bg-[#e1e1e1] dark:hover:text-cyan-600 dark:hover:bg-[#4a525d] ${
                            location.pathname === item.path
                                ? "dark:bg-[#4a525d] dark:text-cyan-400 bg-[#e1e1e1] text-black"
                                : ""
                        }`}
                    >
                        <Link
                            className="flex justify-between items-center py-2"
                            to={item.path}
                        >
                            <div className="flex items-center gap-2">
                                {item.icon}
                                <span>{item.label}</span>
                            </div>
                            {item.subItems.length > 0 && (
                                <MdKeyboardArrowDown />
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
