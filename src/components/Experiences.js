import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";

export default function Experiences() {
    return (
        <section id="experiences" className="text-gray-900 bg-gray-900 body-font relative mx-auto">
            <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow md:w-3/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center relative"
                >
                    <h1 className="sm:text-5xl text-4xl font-medium title-font text-white mb-9 mx-auto">
                        <AcademicCapIcon className="w-12 inline-block mb-4" /> Experiences
                    </h1>
                    <div className="mb-8 leading-relaxed">
                        <div className="border p-4 rounded bg-gray-800 mb-6 relative flex items-start">
                            <img src="./fidelity.png" alt="Fidelity Logo" className="w-30 h-20 mr-4" />
                            <div>
                                <p className="text-gray-100 font-bold">
                                    <strong>Full-Stack Engineer</strong>
                                </p>
                                <p className="text-gray-100 font-bold">
                                    June 2024 | Fidelity Investments, Merrimack New Hampshire
                                </p>
                            </div>
                        </div>
                        <div className="border p-4 rounded bg-gray-800 mb-6 relative flex items-start">
                            <img src="./ally.png" alt="Ally Logo" className="w-30 h-20 mr-4" />
                            <div>
                                <p className="text-gray-100 font-bold">
                                    <strong>Software Development Intern</strong>
                                </p>
                                <p className="text-gray-100">
                                    May 2023 - August 2023 | Ally Financial, Charlotte, NC
                                </p>
                                <ul className="list-inside list-disc pl-4 text-gray-100 font-bold">
                                    <li>Contributed to developing secure and performant microservices.</li>
                                    <li>Designed solutions for microservices migration to AWS using Terraform.</li>
                                    <li>Unit-tested code using tools like Postman, Tomcat, and JUnit.</li>
                                    <li>Successfully deployed production-level microservices on an enterprise scale.</li>
                                    <li>Collaborated with Scrum Master, POs, managers, and lead engineers in Agile sprints.</li>
                                    <li>Gained a deep understanding of application architecture and development in Service Oriented models.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="border p-4 rounded bg-gray-800 mb-6 relative flex items-start">
                            <img src="./iol.png" alt="IOL Logo" className="w-30 h-20 mr-4" />
                            <div>
                                <p className="text-gray-100 font-bold">
                                    <strong>IPv6 Technician Intern</strong>
                                </p>
                                <p className="text-gray-100">
                                    February 2022 – May 2023 | University of New Hampshire InterOperability Lab, Durham, NH
                                </p>
                                <ul className="list-inside list-disc pl-4 text-gray-100 font-bold">
                                    <li>Tested & certified hosts and routers for IPv6 technology adoption.</li>
                                    <li>Scripted device drivers using Tcl and Expect for IPv6 testing.</li>
                                    <li>Conducted detailed conformance and interoperability testing of existing and prototype products.</li>
                                    <li>Debugged, troubleshooted, and provided general assistance throughout the agile test cycle.</li>
                                    <li>Attended daily scrum meetings to discuss updates.</li>
                                    <li>Wrote detailed conformance and interoperability reports within the given timeframe.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}