
import React from "react";
import Project from "./Project";
import { ProjectInterface } from "../interface";
import { Playlist, ToDoListSvg, WebsiteSvg } from './Svgs';

function Projects() {
    const projects: ProjectInterface[] = [
        {
            title: "Personal Website",
            description: "I created this personal website for practice in using React, TypeScript, and Tailwind. This serves as a more visual way of viewing my portfolio, and more fun!",
            imageUrl: <WebsiteSvg/>,
            repoLink: "https://github.com/Vlad0244/resume-website",
            index: 0,
        },
        {
            title: "Music Playlist",
            description: "As an exercise in file-reading and using various Python APIs (Spotipy, Youtube API, youtube-dl). I attempted to aggregate all my music from Spotify and Youtube together for download to PC/Android device using youtube-dl.",
            imageUrl: <Playlist/>,
            repoLink: "https://github.com/Vlad0244/yt-playlist",
            index: 1,
        },
        {
            title: "To-Do List",
            description: "Functional to-do list app created as an assignment for my JAVA2 course. It was created and required an understanding of JavaFX and Java. The to-do list saves items to a file for persistence.",
            imageUrl: <ToDoListSvg/>,
            repoLink: "https://github.com/Vlad0244/ToDoList/tree/main/ToDoList",
            index: 2,
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
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    repoLink={project.repoLink}
                    index={index}
                />
            ))}
        </>
    );
}

export default Projects;
