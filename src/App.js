import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Team from "./pages/Team"

import Loading from "./pages/components/loading";

import Navbar from "./pages/components/navbar";
import Footer from "./pages/components/footer";
import { useEffect, useState } from "react";

function App() {
    useEffect(() => {
        // Funktion, um den Titel zu ändern, wenn die Seite nicht im aktiven Tab ist
        const handleVisibilityChange = () => {
          if (document.hidden) {
            document.title = 'Give us money';
          } else {
            document.title = 'Jars - Corporate Design';
          }
        };
    
        // Event-Listener für das visibilitychange-Event hinzufügen
        document.addEventListener('visibilitychange', handleVisibilityChange);
    
        // Aufräumen beim Komponentenabbau
        return () => {
          document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    const [loading, setLoading] = useState(true);

    const LoadingInterval = setInterval(checkIfisLoading, 2000)
    function checkIfisLoading() {
        if (document.readyState === 'complete') {
            setLoading(false)
            clearInterval(LoadingInterval)
        }

    }



    return (
        loading ? (
            <Loading /> // Rendern Sie die Preloading-Seite
          ) : (
            <BrowserRouter>
                <header>
                    <Navbar></Navbar>
                </header>
                <main class="overflow-x-hidden">
                    <Routes>
                        <Route path="/jars" element={<Home />}/>
                        <Route path="/team" element={<Team />}/>
                        {/* <Route path="/projects" elemnt={<Projects />}/> */}
                    </Routes>
                </main>
                <footer>
                    <Footer></Footer>
                </footer>
            </BrowserRouter>)
        
    );
}

export default App