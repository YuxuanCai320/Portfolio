import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faInfoCircle, faProjectDiagram, faBlog, faEnvelope, faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FloatButton } from 'antd';
import 'antd/dist/reset.css'; // Ensure correct path for Ant Design styles
import './App.css';
import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';
import LoadingScreen from '../src/components/LoadingScreen'; // Import the LoadingScreen component

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`App flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
            {isLoading && <LoadingScreen />}
            <nav className="fixed top-0 w-full navbar-switch p-4 flex justify-between items-center z-50">
                <div className="flex items-center">
                    <a href="/">
                        <img src={`${process.env.PUBLIC_URL}/asset/image/Anime-Eupho-Logo.png`} alt="Logo" className="navbar-logo" />
                    </a>
                </div>
                <div className="flex items-center">
                    <button onClick={toggleDarkMode} className="p-2 mr-4">
                        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="text-xl" />
                    </button>
                </div>
            </nav>

            <div className="mt-16">  {/* Margin to prevent content overlap */}
                <Header />
                <Content onDataLoaded={() => setIsLoading(false)} />
                <Footer />
            </div>

            <FloatButton.Group
                trigger="hover"
                type="primary"
                style={{ right: 24, bottom: 24 }}
                icon={<FontAwesomeIcon icon={faBars} />}
            >
                <FloatButton
                    icon={<FontAwesomeIcon icon={faCircleUp} />}
                    tooltip="Top"
                    onClick={scrollToTop}
                />
                <FloatButton
                    icon={<FontAwesomeIcon icon={faInfoCircle} />}
                    tooltip="About Me"
                    onClick={() => window.location.href = '#about-me'}
                />
                <FloatButton
                    icon={<FontAwesomeIcon icon={faProjectDiagram} />}
                    tooltip="My Projects"
                    onClick={() => window.location.href = '#my-projects'}
                />
                <FloatButton
                    icon={<FontAwesomeIcon icon={faBlog} />}
                    tooltip="My Blogs"
                    onClick={() => window.location.href = '#my-blogs'}
                />
                <FloatButton
                    icon={<FontAwesomeIcon icon={faEnvelope} />}
                    tooltip="Contact Me"
                    onClick={() => window.location.href = '#contact-me'}
                />
            </FloatButton.Group>
        </div>
    );
}

export default App;
