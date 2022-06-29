import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';



const OnePage = () => {
    return (
        <div className="onePage">
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default OnePage;
