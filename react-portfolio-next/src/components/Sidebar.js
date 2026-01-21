import React from "react";
import { Button } from "@/components/ui/button";

class Sidebar extends React.Component {
  toggle = e => {
    this.props.toggle(e.target.textContent.toLowerCase());
  };
  render() {
    return (
      <div id="sidebar" className="w-1/4 pt-12 h-full bg-primary text-center shadow-soft">
        <img
          className="w-28 h-28 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-medium"
          src="/images/me01.jpg"
          alt="profile avatar"
        ></img>
        <h1 className="text-heading-2 font-bold mb-2 text-white px-4">
          <div>
            Jeremiah Graham
            <div className="text-body-sm font-normal text-white/80 mt-2">Software Engineer & Learning Technologist</div>
          </div>
        </h1>
        <nav className="flex flex-col gap-1 mb-8 mt-8 px-4">
          <button 
            className="px-4 py-3 text-white/80 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-200 cursor-pointer text-left font-medium text-sm"
            onClick={this.toggle}
          >
            MY STORY
          </button>
          <button 
            className="px-4 py-3 text-white/80 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-200 cursor-pointer text-left font-medium text-sm"
            onClick={this.toggle}
          >
            PORTFOLIO
          </button>
          <button 
            className="px-4 py-3 text-white/80 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-200 cursor-pointer text-left font-medium text-sm"
            onClick={this.toggle}
          >
            SYSTEMS & DEVOPS
          </button>
          <button 
            className="px-4 py-3 text-white/80 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-200 cursor-pointer text-left font-medium text-sm"
            onClick={this.toggle}
          >
            CONTACT
          </button>
        </nav>
        <div id="social-icons" className="flex gap-3 justify-center px-4">
          <a href="https://www.linkedin.com/in/jtgraham5th/" aria-label="LinkedIn">
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
              <i className="large linkedin icon"></i>
            </Button>
          </a>
          <a href="https://github.com/jtgraham5th" aria-label="GitHub">
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
              <i className="large github icon"></i>
            </Button>
          </a>
          <a href="mailto:jtgraham5th@gmail.com" aria-label="Email">
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
              <i className="large mail icon"></i>
            </Button>
          </a>
        </div>
      </div>
    );
  }
}
export default Sidebar;
