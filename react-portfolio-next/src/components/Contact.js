import React from "react";
import Resume from "./Resume";

function Contact() {
  return (
    <div id="resume" className="flex justify-center h-full overflow-y-auto py-8">
      <div className="w-3/4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-hero font-bold text-primary-dark mb-6">Interested in working together?</h1>
          <p className="text-body-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            If you are interested in working together on a project or if you
            have any questions, don't hesitate to reach out to me on LinkedIn or
            contact me via email.
          </p>
        </div>
        <div className="bg-white/80 p-8 rounded-xl shadow-soft mb-8">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-5 px-4 align-middle font-medium text-primary-dark">
                  <i className="big linkedin icon mr-3"></i>
                  <span>LinkedIn</span>
                </td>
                <td className="py-5 px-4 align-middle">
                  <a href="https://www.linkedin.com/in/jeremiah-graham-5th/" className="text-body text-primary hover:underline transition-colors">
                    linkedin.com/in/jtgraham5th/
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-5 px-4 align-middle font-medium text-primary-dark">
                  <i className="big mail icon mr-3"></i>
                  <span>Email</span>
                </td>
                <td className="py-5 px-4 align-middle">
                  <a href="mailto:jtgraham5th@gmail.com" className="text-body text-primary hover:underline transition-colors">
                    jtgraham5th@gmail.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Resume />
      </div>
    </div>
  );
}
export default Contact;
