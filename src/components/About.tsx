import selfPortrait from "../media/self.png";
import React from "react";

function About() {
  return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-x-5 max-w-[1000px] mx-auto">
            <div className="justify-center">
                <h1 id="about" className="text-center text-6xl text-[#1e152a]">
                    About
                </h1>
                <p className="text-center text-[#1e152a]">

                    I am a hobbyist programmer and a current Software Development student at Sheridan College.
                    I derive satisfaction from solving everyday problems through coding and aspire to secure full-time
                    employment in this field. My proficiency extends to Java, Python, HTML/CSS, TypeScript, SQL, and
                    I also possess experience in machine learning using TensorFlow and Keras. I am committed to coding every day to
                    enhance my skills and eagerly embrace challenges.
                </p>
            </div>
            <div className="flex items-center justify-center">
                <img className="max-w-full sm:h-96"  src={selfPortrait} alt="vladImg"></img>
            </div>
        </div>
      </>
  );
}

export default About;
