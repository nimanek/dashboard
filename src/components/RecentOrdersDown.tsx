import { CiHeadphones } from "react-icons/ci";
import { GiRunningShoe } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import { FiWatch } from "react-icons/fi";
import { useState } from "react";

export const RecentOrdersDown = () => {
    const [activeCategory, setActiveCategory] = useState('headphones');


    const categories = [
        { id: "headphones", label: "Headphones", icon: <CiHeadphones /> },
        { id: "shoes", label: "Shoes", icon: <GiRunningShoe /> },
        { id: "tshirt", label: "T-shirt", icon: <FaTshirt /> },
        { id: "watch", label: "Watch", icon: <FiWatch /> },
    ];

    const orders = {
  headphones: [
    { id: 1, name: 'Apple AirPods Max', item: 'Item: MGYL3', qty: 1, price: 615, total: 615 },
    { id: 2, name: 'Bang & Olufsen', item: 'Item: HX Timber', qty: 2, price: 681, total: 1362 },
    { id: 3, name: 'Beats By Dre Studio', item: 'Item: MQUF2', qty: 4, price: 367.41, total: 1469.64 },
    { id: 4, name: 'Bang & Olufsen TS64', item: 'Item: MGYL3', qty: 1, price: 599, total: 599 },
    { id: 3, name: 'Beats By Dre Studio', item: 'Item: MQUF2', qty: 4, price: 367.41, total: 1469.64 },
  ],
  shoes: [
    { id: 5, name: 'Nike', item: 'Item: MGYL3', qty: 1, price: 615, total: 615 },
    { id: 6, name: 'Puma', item: 'Item: MGYL3', qty: 1, price: 615, total: 615 },
    { id: 7, name: 'Jordan', item: 'Item: MGYL3', qty: 1, price: 615, total: 615 },
],
  tshirt: [
    { id: 8, name: 'GoodOne', item: 'Item: MGYL3', qty: 2, price: 89, total: 160 }
],
  watch: [
    {id: 9, name: 'Rolex', item: 'Item: MGYL3', qty: 1, price: 615, total: 615 }
],
}

    return (
        <div className="flex flex-col">
            <div className="flex justify-around mt-6 gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={()=>setActiveCategory(cat.id)} 
                        className={`border flex flex-col justify-center items-center p-4 w-36 cursor-pointer rounded ${activeCategory === cat.id ? 'border-cyan-600 text-cyan-600' : 'border-gray-500 text-gray-500'}`}>
                        <span>{cat.icon}</span>
                        <p>{cat.label}</p>
                    </button>
                ))}
            </div>

            {/* down table */}
            <div className="max-h-60 overflow-y-auto custom-scrollbar">
                <table className="w-full border-collapse mt-6">
                    <thead>
                        <tr className="font-bold text-gray-300">
                            <th className="text-left p-2">Item</th>
                            <th className="text-left p-2">Quantity</th>
                            <th className="text-left p-2">Price</th>
                            <th className="text-left p-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders[activeCategory].map((order)=>(
                                <tr className="border-b text-gray-400">
                            <td className="p-2">
                                <img
                                    className="rounded"
                                    src="https://placehold.co/40"
                                />
                            </td>
                            <td className="p-2">x{order.qty}</td>
                            <td className="p-2">${order.price}</td>
                            <td className="p-2">${order.total}</td>
                        </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
