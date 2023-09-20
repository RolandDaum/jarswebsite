import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'

export default function Navbar() {

    const [navbarOpen, setNavbarOpen] = useState(false);

    useEffect(() => {
        if (navbarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    
        // Aufräumen beim Komponentenabbau
        return () => {
            document.body.style.overflow = 'auto';
        };
      }, [navbarOpen]);


    return (
        <nav className="Navbar" class="h-fit w-full m-0 pt-10 flex flex-col justify-center items-center bg-background select-none overflow-hidden TBP:p-0">
            <div class="h-fit w-screen pt-10 flex flex-row justify-around items-center bg-background select-none TBP:justify-between TBP:p-5">
                <NavLink to='/jars'>
                    <div class="flex flex-row justify-center items-center">
                        <img src={logo} class="h-16"></img>
                        <h1 class="text-text text-4xl font-impact ml-8 TBP:hidden">Corporate Design</h1>
                    </div>
                </NavLink>
                <div class="flex justify-evenly items-center TBP:hidden">
                    <NavLink to="/jars" class="">
                        <p class="font-bodonimt text-3xl text-text mx-3 hover:underline">Pricing</p>
                    </NavLink>
                    <NavLink to="/jars" class="">
                        <p class="font-bodonimt text-3xl text-text mx-3 hover:underline">Team</p>
                    </NavLink>
                    <NavLink to="/jars" class="">
                        <p class="font-bodonimt text-3xl text-text mx-3 hover:underline">News</p>
                    </NavLink>
                    <NavLink to="/jars" class="">
                        <p class="font-bodonimt text-3xl text-text mx-3 p-3 bg-primary-500 rounded hover:bg-primary-600 active:translate-y-1">Projects</p>
                    </NavLink>
                </div>
                <div className={`hidden TBP:flex relative flex-col transition-all ${navbarOpen ? 'rotate-90' : 'rotate0'}`} onClick={() => setNavbarOpen((prev) => !prev)}>
                    <span class="w-10 h-1 bg-text my-1"></span>
                    <span class="w-10 h-1 bg-text my-1"></span>
                </div>
            </div>
            <div className={`${navbarOpen ? 'flex' : 'hidden'} flex-col justify-start items-center h-full w-screen absolute left-0 top-24 bg-background bg-opacity-50 backdrop-blur pt-10 overflow-hidden`}>
                <NavLink to="/jars" class="">
                    <p class="font-bodonimt text-5xl text-text mx-3 hover:underline p-2">Pricing</p>
                </NavLink>
                <NavLink to="/jars" class="">
                    <p class="font-bodonimt text-5xl text-text mx-3 hover:underline p-2">Team</p>
                </NavLink>
                <NavLink to="/jars" class="">
                    <p class="font-bodonimt text-5xl text-text mx-3 hover:underline p-2">News</p>
                </NavLink>
                <NavLink to="/jars" class="">
                    <p class="font-bodonimt text-5xl text-text mx-3 hover:underline p-2">Projects</p>
                </NavLink>
            </div>
        </nav>
    )
}