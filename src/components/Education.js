import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";

export default function Education() {
    return (
        <section id="education" className="text-gray-900 bg-gray-900 body-font relative mx-auto">
            <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow md:w-3/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center relative"
                >
                    <h1 className="sm:text-5xl text-4xl font-medium title-font text-white mb-9 mx-auto">
                        <AcademicCapIcon className="w-12 inline-block mb-4" /> Education
                    </h1>
                    <div className="mb-8 leading-relaxed">
                        <div className="border p-4 rounded bg-gray-800 mb-6 relative flex items-start">
                            <img src="./UNH.png" alt="UNH Logo" className="w-30 h-20 mr-4" />
                            <div>
                                <p className="text-gray-100 font-bold">
                                    <strong>University of New Hampshire</strong>
                                </p>
                                <p className="text-gray-100 font-bold">
                                   August 2020 - June 2024 | Bachelors of Science in Computer Science
                                </p>
                                <p className="text-gray-100 ">
                                    GPA: 3.4/4.0
                                    <br/>
                                    Relevant Coursework: Algorithms, Data Structures, Introduction to Software Engineering, Mathematical Proofs, Assembly Language
                                    Programming & Machine Organization, Cybersecurity, Calculus 2, Statistical Analysis, Digital Systems, O-O Design, and Development, Operating Systems, SQL, Functional Programming.
                                    <br/>
                                    Publication: (In ● de ● pen ● dent) - Personal narrative essay selected to be published in University of New Hampshire Transitions: 2021-2022.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}