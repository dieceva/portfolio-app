import React from "react";
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import logo from "../assets/diego-logo.png";
import menu from "../assets/menu.svg";  
import close from "../assets/close.svg";  


const navLinks = [
    {id:1, url:'/about',label:'About'},
    {id:2, url:'/skills',label:'Skills'},
    {id:3, url:'/experience',label:'Experience'},
    
  ];

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="w-full flex-items-center fixed top-0 z-20 bg-primary px-5">
            <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
            <Link 
                to="./"
                className="flex items-center gap-2"
                onClick={()=>{setActive("");
                window.scrollTo(0.0);
                }}>
                <img src={logo} alt="logo" className="size-32 object-contain cursor-pointer p-3"></img>
            </Link>
            <ul className="list-none hidden sm:flex flex-row gap-10">
                {navLinks.map((link) => (
                    <li
                    key={link.id}
                    className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px]`}>
                        <a href={`#${link.url}`}>{link.label}</a>
                    </li>
                ))}
            </ul>
            <div
                className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu} 
                    alt="menu" 
                    className="w-[28px] h-[28px] object-contain cursor-pointer"
                    onClick={()=>{setToggle(!toggle)}}/>
                <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                    <ul className="list-none justify-end items-start flex-col gap-4">
                    {navLinks.map((link) => (
                    <li
                    key={link.id}
                    className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={()=>{setToggle(!toggle); setActive(link.label);
                    }}>
                        <a href={`#${link.url}`}>{link.label}</a>
                    </li>
                ))}
            </ul>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar