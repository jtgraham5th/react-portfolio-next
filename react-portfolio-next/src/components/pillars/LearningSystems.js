import React from "react";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

function LearningSystems() {
  const edtechTech = (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" variant="secondary" className="text-white">LMS</Button>
      <Button size="sm" variant="secondary" className="text-white">DOCUMENTATION</Button>
      <Button size="sm" variant="secondary" className="text-white">TRAINING</Button>
      <Button size="sm" variant="secondary" className="text-white">EDTECH</Button>
    </div>
  );

  return (
    <div className="flex justify-center min-h-screen overflow-y-auto pt-24 pb-12">
      <div className="w-full max-w-6xl px-6">
        <div className="mb-12">
          <h1 className="text-hero font-bold text-primary-dark mb-4 flex items-center gap-4">
            <Pencil1Icon 
              className="w-16 h-16 text-primary-dark flex-shrink-0" 
              style={{
                fill: "rgba(20, 44, 4, 0.9)",
              }}
            />
            <span>Learning Systems & EdTech</span>
          </h1>
          <p className="text-body-lg text-gray-700">
            I design and support learning systems that work for real people — educators, administrators, and non-technical users — not just platforms. My background in education and instructional technology allows me to lead adoption, training, and long-term use of digital tools in complex environments.
          </p>
        </div>

        <div className="space-y-8">
          {/* Learning Platform Leadership */}
          <div className="bg-white/80 p-6 rounded-xl shadow-soft">
            <h3 className="text-heading-3 font-semibold text-primary-dark mb-3">
              Learning Platform Leadership
            </h3>
            <ul className="mt-2 text-body text-gray-700 leading-relaxed list-disc list-inside space-y-2">
              <li>Led school-wide implementation and ongoing management of learning platforms and instructional technologies</li>
              <li>Acted as a liaison between educators, administrators, and vendors to align tools with instructional goals</li>
              <li>Designed workflows that fit classroom realities and operational constraints</li>
              <li>Supported sustained adoption beyond initial rollout through iterative improvement and feedback</li>
            </ul>
          </div>

          {/* Adult Training & Professional Development */}
          <div className="bg-white/80 p-6 rounded-xl shadow-soft">
            <h3 className="text-heading-3 font-semibold text-primary-dark mb-3">
              Adult Training & Professional Development
            </h3>
            <ul className="mt-2 text-body text-gray-700 leading-relaxed list-disc list-inside space-y-2">
              <li>Designed and delivered professional learning for educators and staff with varying levels of technical confidence</li>
              <li>Facilitated hands-on, practical training focused on real use cases—not abstract features</li>
              <li>Adapted instruction for adult learners to build confidence, autonomy, and long-term skill transfer</li>
              <li>Reduced reliance on ad-hoc support by empowering users to solve problems independently</li>
            </ul>
          </div>

          {/* Documentation & Knowledge Systems */}
          <div className="bg-white/80 p-6 rounded-xl shadow-soft">
            <h3 className="text-heading-3 font-semibold text-primary-dark mb-3">
              Documentation & Knowledge Systems
            </h3>
            <ul className="mt-2 text-body text-gray-700 leading-relaxed list-disc list-inside space-y-2">
              <li>Created clear, accessible documentation for day-to-day platform use and onboarding</li>
              <li>Applied instructional design principles to technical workflows and system guides</li>
              <li>Standardized training and documentation to support new staff and contractors</li>
              <li>Built shared knowledge systems that improved consistency and reduced repeated support requests</li>
            </ul>
          </div>

          {/* How This Shows Up in My Work */}
          <div className="bg-white/80 p-6 rounded-xl shadow-soft">
            <h3 className="text-heading-3 font-semibold text-primary-dark mb-3">
              How This Shows Up in My Work
            </h3>
            <ul className="mt-2 text-body text-gray-700 leading-relaxed list-disc list-inside space-y-2">
              <li>Technology adoption driven by trust, clarity, and usability</li>
              <li>Systems designed for long-term sustainability, not one-time rollout</li>
              <li>Strong translation between technical teams, leadership, and end users</li>
              <li>A people-centered approach that complements software, DevOps, and platform work</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningSystems;

