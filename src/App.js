import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Team from "./pages/Team"

import Navbar from "./pages/components/navbar";

function App() {
    return (
        <BrowserRouter>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/team" element={<Team />}/>
                    {/* <Route path="/projects" elemnt={<Projects />}/> */}
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App