export const Mainside = () => {
    return (
        <>
            <div className="mx-6 mt-4">
                <div className="">
                    <h3 className="text-white text-2xl">eCommerce Dashboard</h3>
                    <p className="text-gray-600 text-sm">Home - Dashboard</p>
                </div>

                <div className="grid grid-cols-8 grid-rows-6 gap-5">
                    <div className="bg-red-300 col-start-1 col-end-3 row-start-1 row-end-10">.</div>
                    <div className="bg-green-800 col-start-3 col-end-5 row-start-1 row-end-10">.</div>
                    <div className="bg-blue-300 col-start-5 col-end-9 row-start-1 row-end-20">.</div>
                    <div className="bg-red-800 col-start-1 col-end-3 row-start-10 row-end-20">0</div>
                    <div className="bg-green-400 col-start-3 col-end-5 row-start-10 row-end-20"></div>
                    <div className="bg-red-700 col-start-1 col-end-5 row-start-20 row-end-40">2</div>
                    <div className="bg-red-400 col-start-5 col-end-9 row-start-20 row-end-40"></div>
                </div>
            </div>
        </>
    );
};
