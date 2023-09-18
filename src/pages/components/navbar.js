import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'

export default function Navbar() {
    return (
        <nav className="Navbar" class="h-fit w-screen pt-10 flex flex-row justify-around items-center bg-background">
            <NavLink to='/'>
                <div class="flex flex-row justify-center items-center">
                    <img src={logo} class="h-16"></img>
                    <h1 class="text-text text-4xl font-impact ml-8">Corporate Design</h1>
                </div>
            </NavLink>
            <div class="flex justify-evenly items-center">
                <NavLink to="">
                    <p class="font-bodonimt text-3xl text-text mx-3 hover:underline">Pricing</p>
                </NavLink>
                <NavLink to="/team">
                    <p class="font-bodonimt text-3xl text-text mx-3 hover:underline">Team</p>
                </NavLink>
                <NavLink to="">
                    <p class="font-bodonimt text-3xl text-text mx-3 hover:underline">News</p>
                </NavLink>
                <NavLink to="">
                    <p class="font-bodonimt text-3xl text-text mx-3 p-3 bg-primary-500 rounded hover:bg-primary-600 active:translate-y-1">Projects</p>
                </NavLink>
            </div>
        </nav>
    )
}