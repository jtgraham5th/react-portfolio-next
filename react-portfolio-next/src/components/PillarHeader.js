"use client";

import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function PillarHeader({ currentPillar, onNavigate, onBack }) {
  const pillars = [
    { id: "my-story", label: "My Story" },
    { id: "software-development", label: "Software Development" },
    { id: "devops-systems", label: "DevOps & Systems" },
    { id: "learning-systems", label: "Learning Systems" },
  ];

  const otherPillars = pillars.filter((p) => p.id !== currentPillar);

  const handlePillarClick = (pillarId) => {
    if (onNavigate) {
      onNavigate(pillarId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-primary z-50 shadow-medium">
      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between px-6 py-4 h-20">
        {/* Left side: Back arrow + Photo + Description */}
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="text-white hover:text-white/80 transition-colors p-2 hover:bg-white/10 rounded-lg flex items-center justify-center w-8 h-8"
            aria-label="Back to home"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <img
            className="w-12 h-12 rounded-full border-2 border-white/20"
            src="/images/me01.jpg"
            alt="profile avatar"
          />
          <div>
            <h1 className="text-white font-semibold text-sm">
              Jeremiah Graham
            </h1>
            <p className="text-white/80 text-xs">
              Software Engineer & Learning Technologist
            </p>
          </div>
        </div>

        {/* Right side: Links to other pillars */}
        <nav className="flex items-center gap-2">
          {otherPillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => handlePillarClick(pillar.id)}
              className="text-white/80 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 text-sm font-medium"
            >
              {pillar.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        {/* Centered: Photo + Description */}
        <div className="flex items-center gap-3 flex-1 justify-center">
          <img
            className="w-10 h-10 rounded-full border-2 border-white/20"
            src="/images/me01.jpg"
            alt="profile avatar"
          />
          <div className="text-center">
            <h1 className="text-white font-semibold text-xs">
              Jeremiah Graham
            </h1>
            <p className="text-white/80 text-xs hidden sm:block">
              Software Engineer & Learning Technologist
            </p>
          </div>
        </div>

        {/* Menu icon on right */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Menu"
            >
              <HamburgerMenuIcon className="w-6 h-6" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-48 bg-[rgba(20,44,4,0.95)] border-primary-dark"
          >
            <DropdownMenuItem
              onClick={onBack}
              className="text-white/80 hover:text-white hover:bg-white/10 cursor-pointer flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </DropdownMenuItem>
            {otherPillars.map((pillar) => (
              <DropdownMenuItem
                key={pillar.id}
                onClick={() => handlePillarClick(pillar.id)}
                className="text-white/80 hover:text-white hover:bg-white/10 cursor-pointer"
              >
                {pillar.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default PillarHeader;

