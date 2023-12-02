
import React from "react";
import selfPortrait from "../media/self.png";
import Project from "./Project";
import { ProjectInterface } from "../interface";

function Projects() {
    const projects: ProjectInterface[] = [
        {
            title: "Project 1",
            description: "Description for Project 1",
            imageUrl: selfPortrait,
        },
        {
            title: "Project 2",
            description: "Description for Project 2",
            imageUrl: selfPortrait,
        },
        {
            title: "Project 2",
            description: "Description for Project 2",
            imageUrl: selfPortrait,
        },
        {
            title: "Project 2",
            description: "Description for Project 2",
            imageUrl: selfPortrait,
        },
    ];

    return (
        <>
            <h1
                id="projects"
                className="pb-200 text-6xl py-7 text-center text-[#1e152a]"
            >
                Projects
            </h1>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </>
    );
}

export default Projects;
