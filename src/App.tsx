import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { ThemeProvider } from "./context/ThemeContext";
import { Statics } from "./pages/Statics";
import { Reviews } from "./pages/Reviews";
import { Transactions } from "./pages/Transactions";
import { Sellers } from "./pages/Sellers";
import { HotOffers } from "./pages/HotOffers";

function App() {
    return (
        <div className="dark:bg-[#0d111b] bg-[#aaa]">
            <ThemeProvider>
                <Header />
                <div className="grid grid-cols-12">
                    <div className="col-start-1 col-end-3">
                        <Sidebar />
                    </div>
                    <div className="col-span-10 mt-16">
                        <Routes>
                            <Route  path="/" element={<Dashboard />}/>
                            <Route  path="/statics" element={<Statics />}/>
                            <Route  path="/reviews" element={<Reviews />}/>
                            <Route  path="/transactions" element={<Transactions />}/>
                            <Route  path="/sellers" element={<Sellers />}/>
                            <Route  path="/hot-offers" element={<HotOffers />}/>
                        </Routes>
                    </div>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default App;
