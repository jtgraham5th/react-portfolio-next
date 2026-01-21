"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Mobile({ toggle }) {
  const handleToggle = (e) => {
    toggle(e);
  };

  return (
    <>
      <div
        className="border-b-0 pb-0"
        id="mobile-nav"
      >
        <div className="bg-[rgba(20,44,4,0.05)] border-0">
          <div className="flex items-center justify-center p-2">
            <div className="flex gap-2">
              <a 
                href="https://www.linkedin.com/in/jeremiah-graham-5th/"
                className="p-2 hover:bg-black/5 text-gray-700"
                aria-label="LinkedIn"
              >
                <i className="large linkedin icon"></i>
              </a>
              <a 
                href="https://github.com/jtgraham5th"
                className="p-2 hover:bg-black/5 text-gray-700"
                aria-label="GitHub"
              >
                <i className="large github icon"></i>
              </a>
              <a 
                href="mailto:jtgraham5th@gmail.com"
                className="p-2 hover:bg-black/5 text-gray-700"
                aria-label="Email"
              >
                <i className="large mail icon"></i>
              </a>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  className="p-2 hover:bg-black/5 bg-transparent border-0 cursor-pointer"
                  aria-label="Menu"
                >
                  <i className="bars icon"></i>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end"
                className="w-screen min-w-[100vw] bg-[rgba(20,44,4,0.85)] border-0 rounded-none mt-0"
              >
                <DropdownMenuItem
                  onClick={() => handleToggle({ target: { textContent: "ABOUT ME" } })}
                  className="w-full text-right justify-end text-white/60 hover:text-white/90 hover:bg-transparent p-4 cursor-pointer focus:bg-transparent"
                >
                  ABOUT ME
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleToggle({ target: { textContent: "PORTFOLIO" } })}
                  className="w-full text-right justify-end text-white/60 hover:text-white/90 hover:bg-transparent p-4 cursor-pointer focus:bg-transparent"
                >
                  PORTFOLIO
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleToggle({ target: { textContent: "RESUME" } })}
                  className="w-full text-right justify-end text-white/60 hover:text-white/90 hover:bg-transparent p-4 cursor-pointer focus:bg-transparent"
                >
                  RESUME
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleToggle({ target: { textContent: "CONTACT" } })}
                  className="w-full text-right justify-end text-white/60 hover:text-white/90 hover:bg-transparent p-4 cursor-pointer focus:bg-transparent"
                >
                  CONTACT
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobile;
