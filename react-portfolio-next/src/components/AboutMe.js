"use client";

import React from "react";
import { PersonIcon } from "@radix-ui/react-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function AboutMe() {
  const careerJourneySteps = [
    {
      title: "The Foundation",
      content: "My career path has been uniquely shaped by a progression from Primary Education → Instructional Technology → Web Development → DevOps & Systems Engineering. What might seem like a pivot is actually a natural evolution grounded in systems thinking, empathy, and problem-solving.",
    },
    {
      title: "From Teaching to Technology",
      content: "My background in Primary Education taught me how to break down complex concepts, empathize with users, and think systematically about learning and behavior. This foundation naturally led me to Instructional Technology, where I explored how technology could enhance learning experiences.",
    },
    {
      title: "From Learning Systems to Software Systems",
      content: "The transition to Web Development wasn't just about learning code—it was about applying the same systems thinking I used in education to software architecture. Teaching children how to learn became teaching developers how to build, which evolved into building systems that enable others to succeed.",
    },
    {
      title: "From Development to DevOps",
      content: "As I built applications, I became increasingly interested in the infrastructure that makes software reliable, scalable, and maintainable. The same empathy that drove me to understand my students now drives me to reduce friction for development teams through automation, monitoring, and thoughtful infrastructure design.",
    },
    {
      title: "The Common Thread",
      content: "This progression makes sense because at every stage, I've focused on the same core principles: understanding the human element, thinking in systems, and building solutions that reduce complexity for others.",
    },
  ];

  const educationItems = [
    {
      title: "Full Stack Web Development Certification",
      institution: "Georgia Tech Professional Learning Bootcamp",
      description: "Intensive, hands-on immersion in the fundamentals of full stack web development. Acquired practical skills in JavaScript, React, Node.js, Express, databases, RESTful APIs, version control, and modern deployment workflows through collaborative projects and real-world application builds.",
      logo: "/images/gt_logo.webp",
    },
    {
      title: "Master of Education in Instructional Technology",
      institution: "Georgia Southern University",
      description: "Advanced study in educational technology, learning systems, and instructional design. Developed expertise in leveraging technology to enhance learning and teaching practices.",
      logo: "/images/gsu_logo.png",
    },
    {
      title: "Bachelor of Science in Early Childhood Education",
      institution: "Valdosta State University",
      description: "Comprehensive study of child development, instructional strategies, curriculum planning, and early learning environments. Developed expertise in fostering educational growth and positive learning experiences for young children.",
      logo: "/images/vsu_logo.svg",
    },
  ];
  return (
    <div className="flex justify-center min-h-screen overflow-y-auto pt-24 pb-12">
      <div className="w-full max-w-6xl px-6">
        <div className="mb-12">
          <h1 className="text-hero font-bold text-primary-dark mb-8 flex items-center gap-4">
            <PersonIcon 
              className="w-16 h-16 text-primary-dark flex-shrink-0" 
              style={{
                fill: "rgba(20, 44, 4, 0.9)",
              }}
            />
            <span>My Story</span>
          </h1>
        </div>
        
        {/* Career Journey Section */}
        <div className="mb-16">
          <h2 className="text-heading-1 font-bold text-primary-dark mb-6">Career Journey</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {careerJourneySteps.map((step, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white/80 p-6 rounded-xl shadow-soft h-full flex flex-col">
                    <h3 className="text-heading-3 font-semibold text-primary-dark mb-4">
                      {step.title}
                    </h3>
                    <p className="text-body-lg leading-relaxed text-gray-700 flex-grow">
                      {step.content}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12" />
            <CarouselNext className="right-0 md:-right-12" />
          </Carousel>
        </div>

        {/* Core Philosophy Section */}
        <div className="mb-16">
          <h2 className="text-heading-1 font-bold text-primary-dark mb-6">Core Philosophy</h2>
          <div className="space-y-6 text-body-lg leading-relaxed text-gray-700">
            <p>
              <strong>Pragmatic-Optimist:</strong> I believe in solving real problems with practical solutions, while maintaining optimism about what's possible. I'm hardworking and a team player, highly organized and motivated when it comes to solving problems and achieving goals.
            </p>
            <p>
              <strong>Systems Thinking:</strong> Whether building applications or infrastructure, I think in terms of interconnected systems. I consider not just how something works, but how it fits into the larger ecosystem and how it affects the people who use it.
            </p>
            <p>
              <strong>Human-Centered Development:</strong> Technology should serve people. My background in education has given me a unique perspective on user experience, documentation, and making complex systems accessible to non-technical users.
            </p>
            <p>
              Dedicated to developing projects with the latest web technologies and infrastructure practices. Willing to go above and beyond for projects that recognize their impact and want to add value to their organization.
            </p>
          </div>
        </div>

        {/* Skills Section - Reframed by Domain */}
        <div className="mb-16">
          <h2 className="text-heading-1 font-bold text-primary-dark mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Software Development */}
            <div className="bg-white/80 p-6 rounded-xl shadow-soft">
              <h3 className="text-heading-3 font-semibold text-primary-dark mb-4 flex items-center gap-3">
                <i className="code icon text-2xl"></i>
                Software Development
              </h3>
              <div className="flex flex-wrap gap-2 text-base">
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">React</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Node.js</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">JavaScript</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Python</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">HTML5</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">CSS3</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Express</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">MySQL</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">MongoDB</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Firebase</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Serverless</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Flutter</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Dart</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">OpenAI</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">API Integration</span>
              </div>
            </div>

            {/* DevOps & Infrastructure */}
            <div className="bg-white/80 p-6 rounded-xl shadow-soft">
              <h3 className="text-heading-3 font-semibold text-primary-dark mb-4 flex items-center gap-3">
                <i className="server icon text-2xl"></i>
                DevOps & Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2 text-base">
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Jenkins</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">YAML</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Splunk</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">CI/CD</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Infrastructure as Code</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Automation</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Monitoring</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Reliability Engineering</span>
              </div>
            </div>

            {/* Learning Systems & EdTech */}
            <div className="bg-white/80 p-6 rounded-xl shadow-soft">
              <h3 className="text-heading-3 font-semibold text-primary-dark mb-4 flex items-center gap-3">
                <i className="graduation cap icon text-2xl"></i>
                Learning Systems & EdTech
              </h3>
              <div className="flex flex-wrap gap-2 text-base">
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">LMS Management</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Platform Rollouts</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Training Systems</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Documentation</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">User Enablement</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Educational Technology</span>
              </div>
            </div>

            {/* AI & Automation */}
            <div className="bg-white/80 p-6 rounded-xl shadow-soft">
              <h3 className="text-heading-3 font-semibold text-primary-dark mb-4 flex items-center gap-3">
                <i className="robot icon text-2xl"></i>
                AI & Automation
              </h3>
              <div className="flex flex-wrap gap-2 text-base">
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">OpenAI Integration</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">AI-Assisted Tools</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Automation Workflows</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">AI Product Development</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-heading-1 font-bold text-primary-dark mb-6">Education</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {educationItems.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white/80 p-6 rounded-xl shadow-soft h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex flex-row items-center gap-2">
                            <img
                            src={item.logo}
                            alt={`${item.institution} logo`}
                            className="w-16 h-16 rounded-full border-2 border-primary/20 object-contain bg-white p-2 shadow-soft"
                          />
                          <p className="text-body-lg font-medium text-gray-600">
                            {item.institution}
                          </p>
                        </div>
                        <h3 className="text-heading-3 font-semibold text-center text-primary-dark mb-1">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-body text-center text-gray-700 flex-grow">
                      {item.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12" />
            <CarouselNext className="right-0 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
