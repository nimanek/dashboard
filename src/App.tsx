import "./App.css";
import { Header } from "./components/Header";
import { Mainside } from "./components/Mainside";
import { Sidebar } from "./components/Sidebar";

function App() {
    return (
        <>
            <Header />
            <div className="grid grid-cols-12">
                <div className="col-start-1 col-end-3"><Sidebar /></div>
                <div className="col-span-10 mt-16"><Mainside /></div>
            </div>
        </>
    );
}

export default App;
