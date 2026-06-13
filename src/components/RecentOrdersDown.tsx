import { CiHeadphones } from "react-icons/ci";
import { GiRunningShoe } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import { FiWatch } from "react-icons/fi";

export const RecentOrdersDown = () => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-around mt-6 gap-3">
                <button className=" border flex flex-col justify-center items-center p-4 w-36 cursor-pointer rounded border-gray-500 text-gray-500 hover:text-cyan-600 hover:border-cyan-600">
                    <CiHeadphones />
                    <p>Headphones</p>
                </button>
                <button className=" border flex flex-col justify-center items-center p-4 w-36 cursor-pointer rounded border-gray-500 text-gray-500 hover:text-cyan-600 hover:border-cyan-600">
                    <GiRunningShoe />
                    <p>Shoes</p>
                </button>
                <button className=" border flex flex-col justify-center items-center p-4 w-36 cursor-pointer rounded border-gray-500 text-gray-500 hover:text-cyan-600 hover:border-cyan-600">
                    <FaTshirt />
                    <p>T-shirts</p>
                </button>
                <button className=" border flex flex-col justify-center items-center p-4 w-36 cursor-pointer rounded border-gray-500 text-gray-500 hover:text-cyan-600 hover:border-cyan-600">
                    <FiWatch />
                    <p>Watches</p>
                </button>
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
                    <tbody className="">
                        <tr className="border-b text-gray-400">
                            <td className="p-2"><img className="rounded" src="https://placehold.co/40" /></td>
                            <td className="p-2">x2</td>
                            <td className="p-2">$10</td>
                            <td className="p-2">$20</td>
                        </tr>
                        <tr className="border-b text-gray-400">
                            <td className="p-2"><img className="rounded" src="https://placehold.co/40" /></td>
                            <td className="p-2">x2</td>
                            <td className="p-2">$10</td>
                            <td className="p-2">$20</td>
                        </tr>
                        <tr className="border-b text-gray-400">
                            <td className="p-2"><img className="rounded" src="https://placehold.co/40" /></td>
                            <td className="p-2">x2</td>
                            <td className="p-2">$10</td>
                            <td className="p-2">$20</td>
                        </tr>
                        <tr className="border-b text-gray-400">
                            <td className="p-2"><img className="rounded" src="https://placehold.co/40" /></td>
                            <td className="p-2">x2</td>
                            <td className="p-2">$10</td>
                            <td className="p-2">$20</td>
                        </tr>
                        <tr className="border-b text-gray-400">
                            <td className="p-2"><img className="rounded" src="https://placehold.co/40" /></td>
                            <td className="p-2">x2</td>
                            <td className="p-2">$10</td>
                            <td className="p-2">$20</td>
                        </tr>
                        <tr className="border-b text-gray-400">
                            <td className="p-2"><img className="rounded" src="https://placehold.co/40" /></td>
                            <td className="p-2">x2</td>
                            <td className="p-2">$10</td>
                            <td className="p-2">$20</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
