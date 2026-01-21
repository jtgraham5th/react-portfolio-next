import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Button } from "@/components/ui/button";

function Portfolio() {
  const ocracyTech = (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" variant="secondary">REACT</Button>
      <Button size="sm" variant="secondary">FIREBASE</Button>
      <Button size="sm" variant="secondary">OPENAI</Button>
      <Button size="sm" variant="secondary">SERVERLESS</Button>
    </div>
  );

  const mernTech = (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" variant="secondary">REACT</Button>
      <Button size="sm" variant="secondary">NODE</Button>
      <Button size="sm" variant="secondary">EXPRESS</Button>
      <Button size="sm" variant="secondary">MONGODB</Button>
    </div>
  );

  const edtechTech = (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" variant="secondary">LMS</Button>
      <Button size="sm" variant="secondary">DOCUMENTATION</Button>
      <Button size="sm" variant="secondary">TRAINING</Button>
      <Button size="sm" variant="secondary">EDTECH</Button>
    </div>
  );

  const react = <i className="react icon"></i>;
  const learning = <i className="graduation cap icon"></i>;

  return (
    <>
      <div id="timeline" className="flex justify-center h-full overflow-y-auto py-8">
        <div className="w-3/4 max-w-6xl">
          <div className="mb-12">
            <h1 className="text-hero font-bold text-primary-dark mb-4">Portfolio</h1>
            <p className="text-body-lg text-gray-700 mt-4">
              Building scalable, human-centered systems across web, DevOps, and digital learning
            </p>
          </div>

          {/* Pillar 1: Software & Product Development */}
          <div className="mb-16">
            <h2 className="text-heading-1 font-bold text-primary-dark mb-8 mt-12">Software & Product Development</h2>
            <VerticalTimeline className="text-left" layout="1-column">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#fff", color: "#000" }}
                date={ocracyTech}
                iconStyle={{ background: "#fff", color: "rgb(23, 97, 13, 0.8)" }}
                icon={react}
                position="right"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="project-content col-span-2">
                    <div>
                      <h3 className="text-heading-3 font-semibold text-primary-dark mb-3">
                        <a href="#" className="hover:underline transition-colors">
                          Ocracy
                        </a>
                      </h3>
                      <h4 className="text-body-lg text-gray-600 mb-6 font-medium">
                        AI-Assisted Civic Platform
                      </h4>
                      <div className="space-y-4 mb-6">
                        <div>
                          <strong className="text-primary-dark font-semibold">Problem:</strong>
                          <p className="mt-2 text-body text-gray-700 leading-relaxed">[To be filled: What problem does Ocracy solve? Who was stuck? What wasn't working?]</p>
                        </div>
                        <div>
                          <strong className="text-primary-dark font-semibold">System Architecture:</strong>
                          <p className="mt-2 text-body text-gray-700 leading-relaxed">Built with React frontend, Firebase backend, OpenAI integration for AI-assisted features, and serverless architecture for scalability. [Add more architecture details as available]</p>
                        </div>
                        <div>
                          <strong className="text-primary-dark font-semibold">Key Decisions:</strong>
                          <p className="mt-2 text-body text-gray-700 leading-relaxed">Chose Firebase for real-time data synchronization and authentication. Implemented serverless architecture for cost efficiency and scalability. Integrated OpenAI for AI-powered features that enhance user experience.</p>
                        </div>
                        <div>
                          <strong className="text-primary-dark font-semibold">Impact:</strong>
                          <p className="mt-2 text-body text-gray-700 leading-relaxed">[To be filled: Users supported, features delivered, scale achieved, automation accomplished]</p>
                        </div>
                      </div>
                      <a href="#" className="inline-block">
                        <Button variant="outline" size="sm" aria-label="GitHub">
                          <i className="large secondary github icon icon"></i>
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#fff", color: "#000" }}
                date={mernTech}
                iconStyle={{ background: "#fff", color: "rgb(23, 97, 13, 0.8)" }}
                icon={react}
                position="right"
              >
                <div className="grid grid-cols-2 gap-4">
                  <a
                    className="project-thumb"
                    href="https://serene-plateau-07976.herokuapp.com/"
                  >
                    <img
                      src="/images/PlateScrape.gif"
                      alt="PlateScrape Thumb"
                      className="w-full h-auto"
                    />
                  </a>
                  <div className="project-content">
                    <div>
                      <h3 className="text-heading-3 font-semibold text-primary-dark mb-3">
                        <a href="https://serene-plateau-07976.herokuapp.com/" className="hover:underline transition-colors">
                          PlateScrape
                        </a>
                      </h3>
                      <h4 className="text-body-lg text-gray-600 mb-6 font-medium">
                        Recipe Ingredient Extraction System
                      </h4>
                      <div className="space-y-4 mb-6">
                        <div>
                          <strong className="text-primary-dark font-semibold">Problem:</strong>
                          <p className="mt-2 text-body text-gray-700 leading-relaxed">Users needed an efficient way to extract and organize recipe ingredients from online sources without manual copying.</p>
                        </div>
                        <div>
                          <strong className="text-primary-dark font-semibold">System:</strong>
                          <p className="mt-2 text-body text-gray-700 leading-relaxed">PlateScrape takes an online recipe and retrieves all ingredients, creating an organized list with amounts needed. Built with MERN stack for full-stack functionality.</p>
                        </div>
                        <div>
                          <strong className="text-primary-dark font-semibold">Decisions:</strong>
                          <p className="mt-2 text-body text-gray-700 leading-relaxed">Chose MERN stack for rapid development and scalability. Implemented web scraping to extract recipe data efficiently.</p>
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
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>

          {/* Pillar 3: Learning Systems & EdTech */}
          <div className="mb-16">
            <h2 className="text-heading-1 font-bold text-primary-dark mb-8 mt-12">Learning Systems & EdTech</h2>
            <VerticalTimeline className="text-left" layout="1-column">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#fff", color: "#000" }}
                date={edtechTech}
                iconStyle={{ background: "#fff", color: "rgb(23, 97, 13, 0.8)" }}
                icon={learning}
                position="right"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="project-content col-span-2">
                    <div>
                      <h3 className="text-heading-3 font-semibold text-primary-dark mb-3">
                        LMS Leadership & Platform Rollouts
                      </h3>
                      <h4 className="text-body-lg text-gray-600 mb-6 font-medium">
                        Educational Technology & Training Systems
                      </h4>
                      <div className="space-y-4 mb-6">
                        <div>
                          <strong className="text-primary-dark font-semibold">Problem:</strong>
                          <p className="mt-2 text-body text-gray-700 leading-relaxed">[To be filled: What training/documentation challenges were addressed? Who needed better learning systems?]</p>
                        </div>
                        <div>
                          <strong className="text-primary-dark font-semibold">System:</strong>
                          <p className="mt-2 text-body text-gray-700 leading-relaxed">Led implementation and management of Learning Management Systems (LMS). Created training programs, documentation, and user enablement materials. Designed systems for training adults and non-technical users.</p>
                        </div>
                        <div>
                          <strong className="text-primary-dark font-semibold">Decisions:</strong>
                          <p className="mt-2 text-body text-gray-700 leading-relaxed">Focus on user experience for non-technical users. Prioritized clear documentation and accessible training materials. Built systems with empathy for learners' needs.</p>
                        </div>
                        <div>
                          <strong className="text-primary-dark font-semibold">Impact:</strong>
                          <p className="mt-2 text-body text-gray-700 leading-relaxed">[To be filled: User adoption rates, training outcomes, team productivity improvements, documentation impact]</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#fff", color: "#000" }}
                date={edtechTech}
                iconStyle={{ background: "#fff", color: "rgb(23, 97, 13, 0.8)" }}
                icon={learning}
                position="right"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="project-content col-span-2">
                    <div>
                      <h3 className="text-heading-3 font-semibold text-primary-dark mb-3">
                        Training Systems & Documentation
                      </h3>
                      <h4 className="text-body-lg text-gray-600 mb-6 font-medium">
                        User Enablement & Knowledge Management
                      </h4>
                      <div className="space-y-4 mb-6">
                        <div>
                          <strong className="text-primary-dark font-semibold">Problem:</strong>
                          <p className="mt-2 text-body text-gray-700 leading-relaxed">Teams needed better documentation, training resources, and knowledge management systems to enable users effectively.</p>
                        </div>
                        <div>
                          <strong className="text-primary-dark font-semibold">System:</strong>
                          <p className="mt-2 text-body text-gray-700 leading-relaxed">Created comprehensive training systems, technical documentation, and user guides. Designed educational content that bridges technical and non-technical audiences.</p>
                        </div>
                        <div>
                          <strong className="text-primary-dark font-semibold">Decisions:</strong>
                          <p className="mt-2 text-body text-gray-700 leading-relaxed">Applied instructional design principles to technical documentation. Focused on clarity, accessibility, and user-centered design. Leveraged educational technology to enhance learning experiences.</p>
                        </div>
                        <div>
                          <strong className="text-primary-dark font-semibold">Impact:</strong>
                          <p className="mt-2 text-body text-gray-700 leading-relaxed">[To be filled: Impact on team productivity, user enablement, documentation quality, training effectiveness]</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
