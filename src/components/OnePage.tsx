import React from 'react';
import About from './About';
import Home from './Home';
import Navbar from './Navbar';
import Skills from './Skills';



const OnePage = () => {
    return (
        <div className="onePage">
            <Navbar />
            <Home />
            <About />
            <Skills />
        </div>
    );
};

export default OnePage;
