import React from "react";
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import logo from "../assets/diego-logo.png";

const Navbar = () => {
    return (
        <nav className="w-full flex-items-center py fixed top-0 z-20 bg-primary">
            <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
            <Link 
                to="./"
                className="flex items-center gap-2"
                onClick={()=>{setActive("");
                window.scrollTo(0,0);
                }}>
                <img src={logo} alt="logo" className="size-32 object-contain cursor-pointer p-3"></img>
            </Link>
            </div>
        </nav>
    )
}

export default Navbar