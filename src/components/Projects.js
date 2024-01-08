import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font mb-60">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-10">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        <CodeIcon className="mx-auto inline-block w-11 mb-1" /> Personal Projects
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="sm:w-1/2 w-full p-4 mb-20 ">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-fit object-cover object-center"
                                    src={project.image}
                                />
                                <div className="relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed text-white">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
