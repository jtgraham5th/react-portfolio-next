"use client";

import { useState, useCallback } from "react";
import Home from "../components/Home";
import PillarHeader from "../components/PillarHeader";
import AboutMe from "../components/AboutMe";
import Systems from "../components/Systems";
import SoftwareDevelopment from "../components/pillars/SoftwareDevelopment";
import LearningSystems from "../components/pillars/LearningSystems";

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const handleBack = useCallback(() => {
    setCurrentPage("home");
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "my-story":
        return <AboutMe />;
      case "software-development":
        return <SoftwareDevelopment />;
      case "devops-systems":
        return <Systems />;
      case "learning-systems":
        return <LearningSystems />;
      case "home":
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen">
      {currentPage !== "home" && (
        <PillarHeader
          currentPillar={currentPage}
          onNavigate={handleNavigate}
          onBack={handleBack}
        />
      )}
      <main className={currentPage !== "home" ? "pt-20 md:pt-24" : ""}>
        {renderPage()}
      </main>
    </div>
  );
}
