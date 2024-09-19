import React from 'react';
import { Outlet, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Showroom from './components/Showroom';
import './index.css';

function App() {
    return (
        
            <div className='app-content'>
                <Header />
                    <Outlet />
                <Footer />
            </div>
    );
}

export default App;