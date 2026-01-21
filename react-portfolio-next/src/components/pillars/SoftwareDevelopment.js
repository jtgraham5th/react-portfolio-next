import React from "react";
import { CodeIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const PLATE_SCRAPE_IMAGES = [
  "/images/psScreen01.png",
  "/images/psScreen02.png",
  "/images/psScreen03.png",
];

function SoftwareDevelopment() {
  const [currentPlateScrapeSlide, setCurrentPlateScrapeSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlateScrapeSlide(
        (prev) => (prev + 1) % PLATE_SCRAPE_IMAGES.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const ocracyTech = (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" variant="secondary" className="text-white">FLUTTER</Button>
      <Button size="sm" variant="secondary" className="text-white">FIREBASE</Button>
      <Button size="sm" variant="secondary" className="text-white">OPENAI</Button>
      <Button size="sm" variant="secondary" className="text-white">SERVERLESS</Button>
    </div>
  );

  const mernTech = (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" variant="secondary" className="text-white">FLUTTERFLOW</Button>
      <Button size="sm" variant="secondary" className="text-white">FIREBASE</Button>
      <Button size="sm" variant="secondary" className="text-white">CLOUD FUNCTIONS</Button>
      <Button size="sm" variant="secondary" className="text-white">API'S</Button>
    </div>
  );

  const ryghtTech = (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" variant="secondary" className="text-white">REACT</Button>
      <Button size="sm" variant="secondary" className="text-white">HIPAA-CONSCIOUS UI</Button>
      <Button size="sm" variant="secondary" className="text-white">SECURE FORM DESIGN</Button>
      <Button size="sm" variant="secondary" className="text-white">ROLE-BASED UX</Button>
    </div>
  );
  return (
    <div className="flex justify-center min-h-screen overflow-y-auto pt-24 pb-12">
      <div className="w-full max-w-6xl px-6">
        <div className="mb-12">
          <h1 className="text-hero font-bold text-primary-dark mb-4 flex items-center gap-4">
            <CodeIcon 
              className="w-16 h-16 text-primary-dark flex-shrink-0" 
              style={{
                fill: "rgba(20, 44, 4, 0.9)",
              }}
            />
            <span>Software & Product Development</span>
          </h1>
          <p className="text-body-lg text-gray-700">
            Building scalable applications and platforms that solve real problems
          </p>
        </div>

        <div className="space-y-8">
          {/* Ocracy Card */}
            <div className="bg-white/80 p-6 rounded-xl shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 items-stretch">
                {/* Image Column */}
                <a
                href="https://ocracy-dev.web.app/"
                className="block h-full"
                style={{ minWidth: 0 }}
                >
                <img
                    src="/images/Ocracy-Logo.png"
                    alt="Ocracy Logo"
                    className="h-full w-full object-fill rounded-lg shadow-soft"
                    style={{ minHeight: "180px", maxHeight: "300px" }}
                />
                </a>
                {/* Text/Content Column */}
                <div className="flex flex-col justify-between h-full">
                <div>
                    <h3 className="text-heading-3 font-semibold text-primary-dark mb-3">
                    <a href="https://ocracy-dev.web.app/" className="hover:underline transition-colors">
                        Ocracy
                    </a>
                    </h3>
                    <div className="mb-4">
                    {ocracyTech}
                    </div>
                    <h4 className="text-body-lg text-gray-600 mb-4 font-medium">
                    AI-Assisted Civic Platform
                    </h4>
                    <p className="text-body text-gray-700 leading-relaxed">A mobile-first civic polling platform that helps communities collect input and automatically transform responses into readable insights—without manual analysis or moderation overhead.
                    </p>
                </div>
                </div>
            </div>
            <div className="space-y-4 mb-6">
              <div>
                <strong className="text-primary-dark font-semibold">Problem:</strong>
                <p className="mt-2 text-body text-gray-700 leading-relaxed">Most civic polling tools make participation hard and insight slow. Data is easy to collect, but turning it into something meaningful usually requires time, technical skill, or manual reporting.</p>
              </div>
              <div>
                <strong className="text-primary-dark font-semibold">The Solution:</strong>
                <p className="mt-2 text-body text-gray-700 leading-relaxed">Ocracy combines real-time polling with AI-assisted automation to surface insights quickly and accessibly.</p>
                <ul className="mt-2 text-body text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                  <li>Built with Flutter for a consistent, mobile-first experience</li>
                  <li>Uses Firebase + Firestore for real-time data and authentication</li>
                  <li>Serverless Cloud Functions handle aggregation and automation</li>
                  <li>OpenAI generates summaries and insight-ready outputs from raw poll data</li>
                </ul>
              </div>
              <div>
                <strong className="text-primary-dark font-semibold">Impact:</strong>
                <ul className="mt-2 text-body text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                  <li>Enabled real-time community polling with minimal operational overhead</li>
                  <li>Reduced manual analysis through automated insight generation</li>
                  <li>Demonstrated a scalable pattern for combining AI + serverless + civic UX</li>
                </ul>
              </div>
            </div>
          </div>


        {/* PlateScrape Card */}
        <div className="bg-white/80 p-6 rounded-xl shadow-soft">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
            href="https://serene-plateau-07976.herokuapp.com/"
            className="block"
            >
            <div className="relative w-full overflow-hidden rounded-lg shadow-soft">
                <img
                src={PLATE_SCRAPE_IMAGES[currentPlateScrapeSlide]}
                alt={`PlateScrape screenshot ${currentPlateScrapeSlide + 1}`}
                className="w-full h-auto rounded-lg shadow-soft"
                />
            </div>
            </a>
            <div>
            <h3 className="text-heading-3 font-semibold text-primary-dark mb-3">
                <a href="https://platescrape.flutterflow.app/" className="hover:underline transition-colors">
                PlateScrape
                </a>
            </h3>
            <div className="mb-4">
            {mernTech}
            </div>
            <h4 className="text-body-lg text-gray-600 mb-2 font-medium">
                Recipe Ingredient Extraction System
            </h4>

            <p className="text-body text-gray-700 leading-relaxed">A mobile-first recipe and meal-planning tool that extracts ingredients from online recipes and converts them into structured, usable shopping lists.
            </p>
            <p className="text-body-sm text-gray-500 mb-4 italic">(Originally prototyped with MERN, later migrated to a mobile-first architecture)</p>

            <div className="space-y-4 mb-6">
                <div>
                <strong className="text-primary-dark font-semibold">Problem:</strong>
                <p className="mt-2 text-body text-gray-700 leading-relaxed">Manually copying ingredients from multiple recipes is time-consuming and error-prone, especially when planning meals across a week or household.</p>
                </div>
                <div>
                <strong className="text-primary-dark font-semibold">The Solution:</strong>
                <p className="mt-2 text-body text-gray-700 leading-relaxed">PlateScrape automates the ingredient extraction process, creating a structured shopping list that’s ready to use in the kitchen.</p>
                <ul className="mt-2 text-body text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                    <li>Parses recipe data from external sources and structures ingredients with quantities</li>
                    <li>Uses Firebase as a real-time backend for storage and user data</li>
                    <li>Leverages cloud functions to handle parsing, normalization, and data processing</li>
                    <li>Built with FlutterFlow to deliver a fast, cross-platform mobile UX</li>
                </ul>
                </div>
                <div>
                <strong className="text-primary-dark font-semibold">Impact:</strong>
                <p className="mt-2 text-body text-gray-700 leading-relaxed">Simplifies recipe organization and meal planning for users. Reduces time spent manually transcribing recipe ingredients.</p>
                </div>
            </div>
            <a href="https://github.com/jtgraham5th/PlateScrape">
                <Button variant="outline" size="sm" aria-label="GitHub">
                <i className="large secondary github icon icon"></i>
                </Button>
            </a>
            </div>
        </div>
        </div>

        {/* Ryght Solutions Card */}
        <div className="bg-white/80 p-6 rounded-xl shadow-soft">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 items-stretch">
              <a
                href="https://jtgraham5th.github.io/ryght-solutions/"
                className="block h-full bg-violet-600/10"
                style={{ minWidth: 0 }}
              >
                  <img
                    src="/images/rsScreen.png"
                    alt="Ryght Solutions"
                    className="h-full w-full object-contain rounded-lg shadow-soft"
                  />
              </a>
              <div className="flex flex-col justify-between h-full">
                <div>
                    <h3 className="text-heading-3 font-semibold text-primary-dark mb-3">
                    <a href="https://jtgraham5th.github.io/ryght-solutions/" className="hover:underline transition-colors">
                        Ryght Solutions
                    </a>
                    </h3>
                    <div className="mb-4">
                    {ryghtTech}
                    </div>
                    <h4 className="text-body-lg text-gray-600 mb-2 font-medium">
                    HIPAA-Compliant Healthcare Platform
                    </h4>

                    <p className="text-body text-gray-700 mb-2 leading-relaxed">A front-end prototype for an Electronic Medical Record (EMR) management system designed for a family and behavioral therapy services organization.
                    </p>
                    <p className="text-body text-gray-700 leading-relaxed">The platform was intended to act as a one-stop interface for therapists, clinicians, and administrators to manage clinical and operational workflows.
                    </p>
                </div>
                </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <strong className="text-primary-dark font-semibold">Problem:</strong>
                    <p className="mt-2 text-body text-gray-700 leading-relaxed">Behavioral health organizations often rely on fragmented tools for records, documentation, and coordination. Existing solutions are frequently unintuitive for clinicians and admins, increasing friction in environments where accuracy, privacy, and clarity are critical.</p>
                  </div>
                  <div>
                    <strong className="text-primary-dark font-semibold">My Contribution:</strong>
                    <p className="mt-2 text-body text-gray-700 leading-relaxed">
                      Was responsible for the front-end design and user experience, focusing on:
                    </p>
                    <ul className="mt-2 text-body text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                      <li>Clear, role-aware interfaces for therapists, clinicians, and administrators</li>
                      <li>Structured layouts for sensitive patient and clinical data</li>
                      <li>UX decisions informed by HIPAA constraints and healthcare data handling best practices</li>
                      <li>Designing for non-technical users in a high-stakes, compliance-driven domain</li>
                    </ul>
                    <p className="mt-2 text-body text-gray-700 leading-relaxed">
                      While the platform was not ultimately deployed, the UI and interaction flows were fully implemented and remain functional as a prototype.
                    </p>
                  </div>
                </div>

            </div>
          </div>

        </div>
      </div>

  );
}

export default SoftwareDevelopment;

