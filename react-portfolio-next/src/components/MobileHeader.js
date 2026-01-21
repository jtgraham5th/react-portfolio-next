import React from "react";

const MobileHeader = () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bg-[rgba(20,44,4,0.7)] text-center py-4 z-10"
        id="mobile-header"
      >
        <div>
          <img
            className="w-16 h-16 rounded-full mx-auto mb-2"
            src="/images/me01.jpg"
            alt="profile avatar"
          ></img>
          <a href="/">
            <h1 className="text-xl font-semibold">
              <div>
                Jeremiah Graham
                <div className="text-sm font-normal">Software Engineer & Learning Technologist</div>
              </div>
            </h1>
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
