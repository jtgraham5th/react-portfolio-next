import React from "react";
import { Button } from "@/components/ui/button";

class Profile extends React.Component {
  toggle = e => {
    this.props.toggle(e.target.textContent.toLowerCase());
  };
  render(){
  return (
    <div className="flex flex-col items-center justify-center h-full p-12 text-left">
      <div className="max-w-4xl w-full space-y-8">
          <div className="space-y-4">
            <h1 className="text-hero font-bold text-primary-dark leading-tight">
              Hi, I'm Jeremiah,
            </h1>
            <h2 className="text-display font-semibold text-primary-dark leading-tight">
              Software Engineer & Learning Technologist
            </h2>
            <p className="text-body-lg text-gray-700 leading-relaxed max-w-3xl mt-6">
              I build scalable, human-centered systems across web, DevOps, and digital learning — blending education, automation, and AI to solve real problems.
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="w-fit" 
              onClick={this.toggle}
            >
              MY STORY
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-fit" 
              onClick={this.toggle}
            >
              PORTFOLIO
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-fit" 
              onClick={this.toggle}
            >
              SYSTEMS & DEVOPS
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-fit" 
              onClick={this.toggle}
            >
              CONTACT
            </Button>
          </div>
        </div>
      </div>
  );
}
}
export default Profile;
