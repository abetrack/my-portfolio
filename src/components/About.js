import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center mb-20">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Abhinav Sharma.
                        <br className="hidden lg:inline-block" />
                        <TypeAnimation
                            preRenderFirstString={true}
                            sequence={[
                                500,
                                'Fullstack Software Engineer @ Fidelity Investments.',
                                1000,
                                'Student.',
                                1000,
                                'Back-End Developer.',
                                1000,
                                'Passionate Coder.',
                                1000,
                                'Tech Enthusiast.',
                                1000,
                                'Full-Stack Developer.',
                                1000,
                                'Innovative Thinker.',
                                1000,
                                'Problem Solver.',
                                1000,
                                'Continuous Learner.',
                                1000,
                                'Team Collaborator.',
                                1000,
                                'Front-End Developer.',
                                1000,
                                'Agile Practitioner.'
                            ]}
                            speed={50}
                            style={{ fontSize: '1em' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am a Computer Science student at the University of New Hampshire with a strong foundation in
                        both front-end and back-end development. My coursework and hands-on experience have equipped me
                        with the skills to write efficient and functional code, whether it's creating intuitive user interfaces
                        or architecting robust server-side solutions. I thrive in dynamic, deadline-driven settings,
                        leveraging my analytical and organizational abilities to deliver high-quality results in both
                        front-end design and back-end development.
                    </p>

                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded border border-gray-500 p-2 bg-gray-900"
                        alt="hero"
                        src="./headshot.png"
                    />
                </div>
            </div>
        </section>
    );
}
