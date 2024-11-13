import { Container } from "../../components/container";
import heroImg from '../../assets/heroImg-2.png'

import reactImg from '../../assets/techLogos/react.svg'
import nodeImg from '../../assets/techLogos/nodejs.svg'
import typeImg from '../../assets/techLogos/TypeScript.svg'
import sqlImg from '../../assets/techLogos/sqlite.svg'
import { ProjectCard } from "../../components/projectsCards";

import {projects} from '../../../data.json'
import { useState } from "react";
import { Link } from "react-router-dom";

export function Home(){

    


    return (
        <Container>
            <main className="w-full">
                <div className="w-full h-screen flex items-center justify-center"
                >
                    <div className="w-full h-full max-w-5xl mx-auto flex items-center flex-col gap-36 md:gap-8 md:h-4/5 md:flex-row"
                    >
                        <div className="w-72 h-72 md:w-96 md:h-96 overflow-hidden border-2 rounded-full flex items-center justify-center mt-20">
                            <img
                            className="w-full h-full object-contain"
                            src={heroImg} alt="Photo of Vitor Torquato" />
                        </div>
                        <div className="flex flex-col items-center gap-4 justify-center">
                            <h1 className="text-4xl md:text-7xl text-slate-100">VITOR TORQUATO</h1>
                            <h2 className="text-2xl md:text-4xl text-center text-slate-500">I'm a Frontend developer</h2>
                        </div>
                    </div>
                </div>

                
                <section className="w-full mt-8 md:mt-20">
                    <h1 className="w-60 mx-auto text-3xl md:text-3xl bg-gradient-to-r from-slate-100 to-slate-800 bg-clip-text text-transparent italic text-center font-extrabold mb-5">About me</h1>

                    <p className="text-slate-100 text-center mb-7">Hey there! I’m Vitor Torquato de Sousa, a front-end developer with just over a year in the game. I’m all about creating clean, user-friendly interfaces that don’t just look good but also bring out the real vibe of the brand.</p>
                
                    <p className="text-slate-100 text-center mb-7">
                    When I’m not deep in code, you’ll probably find me out on the field or pushing my limits in some sport. I bring that same energy to my work—always ready to take on new challenges and keep leveling up. Let’s connect and build something awesome!</p>
                </section>


                <section className="w-full mt-8 md:mt-20">
                    <h1 className="w-60 mx-auto text-3xl md:text-3xl bg-gradient-to-r from-slate-100 to-slate-800 bg-clip-text text-transparent italic text-center font-extrabold mb-5">Skills</h1>
                    <div className="w-full">
                            <h1 className=" text-2xl text-slate-300 font-bold mb-2">Technical skills:</h1>
                        <p className="text-slate-100 text-center mb-7">I’m all about creating dynamic, responsive interfaces with React.js, and I use TypeScript to keep things smooth and scalable. For styling, I love working with Tailwind CSS and Styled Components to build clean, customizable designs. I’ve also got some solid backend skills with Node.js and Express, so I can handle APIs and bring the front and back ends together. I’m comfortable with Git and GitHub for version control, so collaborating and keeping things organized is second nature. I’m always on the lookout for new tools and frameworks to keep leveling up my skills and staying current in the dev world.</p>
                        <div className="grid grid-cols-2 gap-7 md:grid-cols-4 place-items-center mb-9">
                            <div>
                                <img
                                className="w-20"
                                src={reactImg} alt="logo React.js" />
                            </div>
                            <div>
                                <img
                                className="w-20"
                                src={typeImg} alt="logo Typescript" />
                            </div>
                            <div>
                                <img
                                className="w-20"
                                src={nodeImg} alt="logo njode.js" />
                            </div>
                            <div>
                                <img
                                className="w-20"
                                src={sqlImg} alt="logo sqlLite" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                            <h1 className="text-2xl text-slate-300 font-bold mb-2">Soft skills:</h1>
                        <p className="text-slate-100 text-center mb-7">I’m a teamwork, problem-solving, and clear communication. After almost eight years as a CrossFit coach, I’m super comfortable speaking in front of groups and know how to keep people motivated and engaged. I love bringing ideas to life with a team, always open to feedback and eager to learn from everyone around me. I’m adaptable and resilient, tackling challenges head-on and always looking for ways to improve. Whether it’s brainstorming, solving tricky problems, or fine-tuning the details, I focus on delivering results that make a real impact.</p>
                    </div>
                
                </section>


                <section>
                    <h1 className="w-60 mx-auto text-3xl md:text-3xl bg-gradient-to-r from-slate-100 to-slate-800 bg-clip-text text-transparent italic text-center font-extrabold">Projects</h1>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">

                       {
                        projects && (
                            projects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    id={project.id}
                                    title={project.title}
                                    cover={project.cover}
                                    description={project.description}
                                    tools={project.tools}
                                    urlDeploy={project.urlDeploy}
                                    urlCode={project.urlCode}
                                />
                            ))
                        )
                       }
                    </div>

                </section>

                <footer
                className="w-full h-16 border-t-2 border-slate-200 mt-16 flex items-center justify-evenly"
                >
                    <Link 
                    className="text-slate-100"
                    to='https://www.linkedin.com/in/vitor-torquatos/' target='_blank'>
                       LinkdeIn
                    </Link>
                    <Link 
                    className="text-slate-100"
                    to='https://www.linkedin.com/in/vitor-torquatos/' target='_blank'>
                       LinkdeIn
                    </Link>
                    <Link
                    className="text-slate-100"
                    to='https://www.linkedin.com/in/vitor-torquatos/' target='_blank'>
                       LinkdeIn
                    </Link>
                </footer>
            </main>

            
            
        </Container>
    )
}