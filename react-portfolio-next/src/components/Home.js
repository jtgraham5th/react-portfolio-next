"use client";

import React from "react";
import { PersonIcon, CodeIcon, GearIcon, Pencil1Icon } from "@radix-ui/react-icons";

function Home({ onNavigate }) {
  const pillars = [
    {
      id: "my-story",
      title: "My Story",
      description: "Background & Journey",
      icon: PersonIcon,
    },
    {
      id: "software-development",
      title: "Software & Product Development",
      description: "Applications & Platforms",
      icon: CodeIcon,
    },
    {
      id: "devops-systems",
      title: "DevOps & Systems Reliability",
      description: "Infrastructure & Automation",
      icon: GearIcon,
    },
    {
      id: "learning-systems",
      title: "Learning Systems & EdTech",
      description: "Training & Documentation",
      icon: Pencil1Icon,
    },
  ];

  const handlePillarClick = (pillarId) => {
    if (onNavigate) {
      onNavigate(pillarId);
    }
  };

  return (
    <>
      {/* Global SVG gradients for icons */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          {pillars.map((pillar) => (
            <linearGradient key={pillar.id} id={`gradient-${pillar.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(20, 44, 4, 0.9)" />
              <stop offset="50%" stopColor="rgba(20, 44, 4, 0.8)" />
              <stop offset="100%" stopColor="rgba(20, 44, 4, 0.6)" />
            </linearGradient>
          ))}
        </defs>
      </svg>

      <div className="flex items-center justify-center min-h-screen p-8 md:p-12">
        <div className="w-full max-w-7xl"> 
            <div className="mb-12 text-center">
                <img
                    className="w-32 h-32 rounded-full mx-auto mb-2 shadow-lg"
                    src="/images/me01.jpg"
                    alt="profile avatar"
                />
                <h1 className="text-hero font-bold text-primary-dark mb-4">
                Hi, I'm Jeremiah
                </h1>
                <p className="text-display font-semibold text-primary-dark mb-6">
                Software Engineer & Learning Technologist
                </p>
                <p className="text-body-lg text-gray-700 max-w-3xl mx-auto">
                I build scalable, human-centered systems across web, DevOps, and digital learning — blending education, automation, and AI to solve real problems.
                </p>
          </div>

          {/* Pillars - Horizontal on desktop, vertical on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {pillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  onClick={() => handlePillarClick(pillar.id)}
                  className="cursor-pointer group"
                >
                  <div className="bg-white rounded-xl border-2 border-primary/30 p-8 h-full flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-medium min-h-[400px]">
                    {/* Pillar icon with green gradient */}
                    <div className="w-28 h-28 flex items-center justify-center mb-4">
                      <IconComponent 
                        className="w-24 h-24 text-primary-dark" 
                        style={{
                          fill: `url(#gradient-${pillar.id})`,
                        }}
                      />
                    </div>
                    
                    {/* Label */}
                    <div className="mt-8 text-center">
                      <h2 className="text-heading-3 font-bold text-primary-dark mb-2">
                        {pillar.title}
                      </h2>
                      <p className="text-body-sm text-gray-600">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
