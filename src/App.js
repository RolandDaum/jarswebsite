import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Team from "./pages/Team"

import Navbar from "./pages/components/navbar";
import Footer from "./pages/components/footer";

function App() {
    return (
        <BrowserRouter>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Routes>
                    <Route path="/jars" element={<Home />}/>
                    <Route path="/team" element={<Team />}/>
                    {/* <Route path="/projects" elemnt={<Projects />}/> */}
                </Routes>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </BrowserRouter>
    );
}

export default App