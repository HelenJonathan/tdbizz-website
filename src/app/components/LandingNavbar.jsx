"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

const LandingNavbar = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const navLinks = document.querySelector(".nav-links");

    const toggleMenu = () => {
      navLinks.classList.toggle("top-[9%]");
    };

    const handleToggleMenu = (e) => {
      if (e.target.name === "menu") {
        toggleMenu();
      }
    };

    window.addEventListener("click", handleToggleMenu);

    return () => {
      window.removeEventListener("click", handleToggleMenu);
    };
  }, []);

  return (
    <nav className="bg-[#EFF2FF] z-40 fixed px-10 top-0 left-0 right-0 md:overflow-hidden sm:overflow-hidden">
      <div className="justify-between lg:max-w-5xl md:items-center md:flex md:px-8 md:overflow-hidden sm:overflow-hidden">
        <div>
          <div className="flex items-center justify-between py-3 md:py-2 md:block">
            {/* LOGO */}
            <Link href="/">
              <Image
                src="/logo.png"
                alt="admin-profile"
                width="100"
                height="40"
              />
            </Link>

            {/* HAMBURGER BUTTON FOR MOBILE */}

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                ) : (
                  <FontAwesomeIcon icon={faBars} size="lg" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <li className="pb-6 text-xl text-[#050b2b] py-2 md:px-4 border-b-2 md:border-b-0  hover:bg-white md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#about" onClick={() => setNavbar(!navbar)}>
                  Features
                </Link>
              </li>
              <li className="pb-6 text-xl text-[#050b2b] py-2 md:px-4 border-b-2 md:border-b-0  hover:bg-white md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                  Testimonials
                </Link>
              </li>
              <li className="pb-6 text-xl text-[#050b2b] py-2 md:px-4 border-b-2 md:border-b-0  hover:bg-white md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                  Contact Us
                </Link>
              </li>

              <button className="bg-[#ffb75e] hover:bg-[#050b2b] text-[#050b2b] hover:text-[#ffb75e] font-bold text-center sm:items-center p-3 sm:px-4 rounded-full">
                Download
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
