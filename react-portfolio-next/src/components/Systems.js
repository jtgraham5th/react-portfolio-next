import React from "react";
import { GearIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

function Systems() {
  const devopsTech = (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" variant="secondary" className="text-white">JENKINS</Button>
      <Button size="sm" variant="secondary" className="text-white">YAML</Button>
      <Button size="sm" variant="secondary" className="text-white">SPLUNK</Button>
      <Button size="sm" variant="secondary" className="text-white">CI/CD</Button>
    </div>
  );

  const splunkTech = (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" variant="secondary" className="text-white">SPLUNK</Button>
      <Button size="sm" variant="secondary" className="text-white">MONITORING</Button>
      <Button size="sm" variant="secondary" className="text-white">DASHBOARDS</Button>
    </div>
  );

  const infraTech = (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" variant="secondary" className="text-white">INFRASTRUCTURE</Button>
      <Button size="sm" variant="secondary" className="text-white">AUTOMATION</Button>
      <Button size="sm" variant="secondary" className="text-white">RELIABILITY</Button>
    </div>
  );

  return (
    <div className="flex justify-center min-h-screen overflow-y-auto pt-24 pb-12">
      <div className="w-full max-w-6xl px-6">
          <div className="mb-12">
            <h1 className="text-hero font-bold text-primary-dark mb-4 flex items-center gap-4">
              <GearIcon 
                className="w-16 h-16 text-primary-dark flex-shrink-0" 
                style={{
                  fill: "rgba(20, 44, 4, 0.9)",
                }}
              />
              <span>DevOps & Systems Reliability</span>
            </h1>
            <p className="text-body-lg text-gray-700">
              Building infrastructure and automation that reduces friction for development teams
            </p>
          </div>
          <div className="space-y-8">
            {/* CI/CD Pipeline Card */}
            <div className="bg-white/80 p-6 rounded-xl shadow-soft">
              <h3 className="text-heading-3 font-semibold text-primary-dark mb-3">
                CI/CD Pipeline Automation
              </h3>
              <div className="mb-4">
                {devopsTech}
              </div>
              <h4 className="text-body-lg text-gray-600 mb-6 font-medium">
                DevOps & Infrastructure
              </h4>
              <div className="space-y-4">
                <div>
                  <strong className="text-primary-dark font-semibold">Problem:</strong>
                  <p className="mt-2 text-body text-gray-700 leading-relaxed">Development teams relied on inconsistent, manual deployment processes that slowed releases and increased the risk of failures across environments.</p>
                </div>
                <div>
                  <strong className="text-primary-dark font-semibold">What I Did:</strong>
                  <ul className="mt-2 text-body text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                    <li>Developed and maintained reusable Jenkins pipelines using declarative YAML</li>
                    <li>Standardized build and deploy workflows across multiple teams</li>
                    <li>Troubleshot pipeline failures and supported developers during CI/CD issues</li>
                    <li>Supported Linux-based staging and production environments during releases</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-primary-dark font-semibold">Impact:</strong>
                  <ul className="mt-2 text-body text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                    <li>Reduced deployment friction and turnaround time</li>
                    <li>Improved release consistency and reliability across teams</li>
                    <li>Enabled faster iteration while staying within SLA expectations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Splunk Dashboards Card */}
            <div className="bg-white/80 p-6 rounded-xl shadow-soft">
              <h3 className="text-heading-3 font-semibold text-primary-dark mb-3">
                Splunk Dashboards & Monitoring
              </h3>
              <div className="mb-4">
                {splunkTech}
              </div>
              <h4 className="text-body-lg text-gray-600 mb-6 font-medium">
                Observability & Insights
              </h4>
              <div className="space-y-4">
                <div>
                  <strong className="text-primary-dark font-semibold">Problem:</strong>
                  <p className="mt-2 text-body text-gray-700 leading-relaxed">Software Teams lacked visibility into system performance and production issues, making troubleshooting time-consuming and reactive.</p>
                </div>
                <div>
                  <strong className="text-primary-dark font-semibold">What I Did:</strong>
                  <ul className="mt-2 text-body text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                    <li>Designed custom Splunk dashboards to monitor application health and error patterns</li>
                    <li>Created alerts, scheduled searches, and reports for proactive issue detection</li>
                    <li>Built queries that translated raw logs into actionable signals for developers</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-primary-dark font-semibold">Impact:</strong>
                  <ul className="mt-2 text-body text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                    <li>Improved incident response times</li>
                    <li>Reduced noise by focusing on metrics that mattered to delivery teams</li>
                    <li>Helped teams identify bottlenecks before they escalated into outages</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Infrastructure Automation Card */}
            <div className="bg-white/80 p-6 rounded-xl shadow-soft">
              <h3 className="text-heading-3 font-semibold text-primary-dark mb-3">
                Infrastructure Automation & Reliability
              </h3>
              <div className="mb-4">
                {infraTech}
              </div>
              <h4 className="text-body-lg text-gray-600 mb-6 font-medium">
                Systems Engineering
              </h4>
              <div className="space-y-4">
                <div>
                  <strong className="text-primary-dark font-semibold">Problem:</strong>
                  <p className="mt-2 text-body text-gray-700 leading-relaxed">Manual infrastructure provisioning led to configuration drift, environment inconsistencies, and deployment failures.</p>
                </div>
                <div>
                  <strong className="text-primary-dark font-semibold">What I Did:</strong>
                  <ul className="mt-2 text-body text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                    <li>Automated repetitive operational tasks to reduce human error</li>
                    <li>Established infrastructure-as-code practices for consistency across environments</li>
                    <li>Created reusable templates to support reliable application rollouts</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-primary-dark font-semibold">Impact:</strong>
                  <ul className="mt-2 text-body text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                    <li>Reduced configuration-related failures</li>
                    <li>Increased confidence in production deployments</li>
                    <li>Improved overall system reliability and operational stability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Systems;

