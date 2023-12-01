import selfPortrait from "../images/self.png";
import React from "react";

function About() {
  return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-x-5 max-w-[1000px] mx-auto">
            <div className="justify-center">
                <h1 id="about" className="bg-amber-800 text-center text-6xl">
                    About
                </h1>
                <p className="text-center text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="flex items-center justify-center">
                <img className="max-w-full sm:h-96"  src={selfPortrait} alt={"image"}></img>
            </div>
        </div>
      </>
  );
}

export default About;
