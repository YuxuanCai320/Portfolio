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
                    <h2 className="text-xl font-bold">About Me</h2>
                    <p>Introduction & Background</p>
                    {/*open a new page to view CV*/}
                    <a href="https://github.com/YuxuanCai320/Resume/blob/main/resume_(Yuxuan%20Cai).pdf" target="_blank" rel="noopener noreferrer" download>
                        <button className="download-button">Download CV</button>
                    </a>
                </div>
                <div className="mb-4" id="my-projects">
                    <h2 className="text-xl font-bold">My Projects</h2>
                    <Slider {...settings}>
                        {projects.map(project => (
                            <div key={project.id} className="px-2">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="mb-4" id="my-blogs">
                    <h2 className="text-xl font-bold">My Blogs</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="blog-card p-4 rounded shadow">
                            <h3 className="text-lg font-semibold">Blog 1</h3>
                            <p>Short description of the blog post.</p>
                        </div>
                        <div className="blog-card p-4 rounded shadow">
                            <h3 className="text-lg font-semibold">Blog 2</h3>
                            <p>Short description of the blog post.</p>
                        </div>
                        <div className="blog-card p-4 rounded shadow">
                            <h3 className="text-lg font-semibold">Blog 3</h3>
                            <p>Short description of the blog post.</p>
                        </div>
                    </div>
                </div>
                <div className="mb-4" id="contact-me">
                    <Contact />
                </div>
            </div>
        </main>
    );
}

export default Content;
