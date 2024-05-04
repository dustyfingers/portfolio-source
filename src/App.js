import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import pages and components
import Landing from './pages/Landing/Landing';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import './App.scss';

const App = () => {
    useEffect(() => {
        console.log('well hello ;)');
        setTimeout(() => console.log('fancy meeting you here!'), 5000);
    }, []);

    return (
        <Router>
            <div id="AppContainer">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
