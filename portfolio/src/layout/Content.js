import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import ProjectCard from '../components/ProjectCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from '../components/Contact';
import './Content.css';

function Content({ onDataLoaded }) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const projCollection = collection(db, 'projects');

        const unsubscribe = onSnapshot(projCollection, (snapshot) => {
            const projectsData = [];
            snapshot.forEach(doc => projectsData.push({ id: doc.id, ...doc.data() }));
            setProjects(projectsData);
            // Call onDataLoaded once data is fetched
            onDataLoaded();
        });

        return () => unsubscribe();
    }, [onDataLoaded]);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <main className="flex-grow py-4">
            <div className="container mx-auto px-4">
                <div className="mb-4" id="about-me">
                    <h1 className="text-xxl font-bold">About Me</h1>
                    <p>My name is Yuxuan Cai and I earned my M.S. in Computer Science in May 2024 from Syracuse
                        University. With a strong foundation in modern web technologies, I specialize in crafting
                        intuitive, dynamic user interfaces that ensure a seamless user experience across all
                        devices.</p>
                    <p>My expertise lies in developing complex web applications using React and JavaScript, focusing on
                        component-based architecture and state management. I leverage Tailwind CSS to design responsive
                        and aesthetically pleasing layouts efficiently, and utilize Ant Design components to build
                        consistent, high-quality user interfaces. My experience with AWS Cognito allows me to integrate
                        secure, scalable authentication solutions into my projects, and I am well-versed in configuring
                        Webpack to optimize and manage application builds. Additionally, I am proficient in implementing
                        CI/CD (Continuous Integration and Continuous Deployment) pipelines, ensuring that code changes
                        are automatically tested, integrated, and deployed, which enhances the overall development
                        workflow and reduces the time to market. This skill allows me to maintain high code quality and
                        deliver reliable software solutions rapidly.</p>
                    <p>In addition to my front-end development skills, I have experience working with Java and C#, which
                        allows me to better collaborate with back-end developers to accommodate a variety of project
                        requirements.</p>
                    <p>During my time at Syracuse University, I honed my skills through rigorous coursework and hands-on
                        projects, gaining a deep understanding of computer science principles and their practical
                        applications in web development. I am passionate about continuous learning and staying updated
                        with the latest industry trends and best practices.</p>
                    <p>I am always eager to collaborate on exciting projects and explore new opportunities in the world
                        of front-end development. Let's connect and create something amazing together!</p>
                    <p>&nbsp;</p>
                    {/*open a new page to view CV*/}
                    <a href="https://github.com/YuxuanCai320/Resume/blob/main/resume_(Yuxuan%20Cai).pdf" target="_blank"
                       rel="noopener noreferrer" download>
                        <button className="download-button transition-all duration-500">Download CV</button>
                    </a>
                </div>
                <div className="mb-4" id="my-projects">
                    <h1 className="text-xxl font-bold">My Projects</h1>
                    <Slider {...settings}>
                        {projects.map(project => (
                            <div key={project.id} className="px-2">
                                <ProjectCard project={project}/>
                            </div>
                        ))}
                    </Slider>
                </div>
                {/*<div className="mb-4" id="my-blogs">*/}
                {/*    <h1 className="text-xxl font-bold">My Blogs</h1>*/}
                {/*    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">*/}
                {/*        <div className="blog-card p-4 rounded shadow">*/}
                {/*            <h3 className="text-lg font-semibold">Blog 1</h3>*/}
                {/*            <p>Short description of the blog post.</p>*/}
                {/*        </div>*/}
                {/*        <div className="blog-card p-4 rounded shadow">*/}
                {/*            <h3 className="text-lg font-semibold">Blog 2</h3>*/}
                {/*            <p>Short description of the blog post.</p>*/}
                {/*        </div>*/}
                {/*        <div className="blog-card p-4 rounded shadow">*/}
                {/*            <h3 className="text-lg font-semibold">Blog 3</h3>*/}
                {/*            <p>Short description of the blog post.</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="mb-4" id="contact-me">
                    <Contact/>
                </div>
            </div>
        </main>
    );
}

export default Content;
