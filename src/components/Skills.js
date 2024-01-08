import { ChipIcon } from "@heroicons/react/solid";
import React from "react";

const skillsSections = [
    {
        title: "Programming Languages",
        items: ['Java', 'C++', 'C', 'SQL', 'HTML', 'CSS', 'Python', 'JavaScript', 'C#'],
    },
    {
        title: "Web Technologies",
        items: ['React', 'Angular', 'JavaScript', 'Terraform'],
    },
    {
        title: "Java Frameworks",
        items: ['Spring Boot'],
    },
    {
        title: "Development Tools",
        items: ['GitHub', 'Gitlab', 'Jira', 'Docker', 'Azure', 'Terraform', 'AWS', 'Maven', 'Apigee'],
    },
    {
        title: "Integrated Development Environments (IDEs)",
        items: ['IntelliJ', 'PyCharm', 'CLion', 'Android Studio', 'Visual Studio Code', 'WebStorm'],
    },
    {
        title: "Certificates",
        items: [
            { title: 'Learn TTD in Java', image: './TTD.png' },
            { title: 'Master Java Web Services and REST API with Spring Boot', image: './REST.png' },
            { title: 'Terraform for AWS', image: './Terraform.png' },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-6">
                    <h1 className="sm:text-5xl text-4xl font-medium title-font text-white mb-1">
                        <ChipIcon className="w-10 inline-block mb-3"/> Technical Skills
                    </h1>
                </div>
                {skillsSections.map((section) => (
                    <div key={section.title} className="mb-6">
                        <h2 className="text-xl font-medium text-white mb-1">{section.title}</h2>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            {section.items.map((item, index) => (
                                <div key={index} className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                        {typeof item === 'string' ? (
                                            <span className="title-font font-medium text-white">{item}</span>
                                        ) : (
                                            <img className="object-cover object-center rounded" alt={item.title} src={item.image} />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
