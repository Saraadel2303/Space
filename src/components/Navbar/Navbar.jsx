import React, { useState } from 'react';
import logo from "../../assets/icons/logo.svg";
import hamburger from "../../assets/icons/icon-hamburger.svg";
import close from "../../assets/icons/icon-close.svg";
import { NavLink } from 'react-router-dom';



export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full flex items-center justify-between p-6 z-50">
      
      <img src={logo} alt="Logo" className="w-10 h-10" />

      <nav className="hidden md:flex gap-8 bg-white/10 backdrop-blur px-12 py-4 rounded-md">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b font-bold" : "hover:opacity-80"
          }
        >
          <span className="font-bold mr-2">00</span> Home
        </NavLink>

        <NavLink
          to="/destination"
          className={({ isActive }) =>
            isActive ? "border-b font-bold" : "hover:opacity-80"
          }
        >
          <span className="font-bold mr-2">01</span> Destination
        </NavLink>

        <NavLink
          to="/crew"
          className={({ isActive }) =>
            isActive ? "border-b font-bold" : "hover:opacity-80"
          }
        >
          <span className="font-bold mr-2">02</span> Crew
        </NavLink>

        <NavLink
          to="/technology"
          className={({ isActive }) =>
            isActive ? "border-b font-bold" : "hover:opacity-80"
          }
        >
          <span className="font-bold mr-2">03</span> Technology
        </NavLink>
      </nav>

      <button
        className="md:hidden"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
      >
        <img src={hamburger} alt="Menu" className="w-6 h-6" />
      </button>

      
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-white/10 backdrop-blur p-6 flex flex-col gap-6 z-50 shadow-lg">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="self-end"
            aria-label="Close menu"
          >
            <img src={close} alt="Close" className="w-6 h-6" />
          </button>

          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="hover:opacity-80"
          >
            <span className="font-bold mr-2">00</span> Home
          </NavLink>

          <NavLink
            to="/destenation"
            onClick={() => setIsMenuOpen(false)}
            className="hover:opacity-80"
          >
            <span className="font-bold mr-2">01</span> Destination
          </NavLink>

          <NavLink
            to="/crew"
            onClick={() => setIsMenuOpen(false)}
            className="hover:opacity-80"
          >
            <span className="font-bold mr-2">02</span> Crew
          </NavLink>
          <NavLink
            to="/technology"
            onClick={() => setIsMenuOpen(false)}
            className="hover:opacity-80"
          >
            <span className="font-bold mr-2">03</span> Technology
          </NavLink>
        </div>
      )}
    </header>
    </>
  )
}
