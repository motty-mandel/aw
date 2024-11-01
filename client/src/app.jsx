import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Showroom from './components/Showroom.jsx';

import './index.css';

function App() {

    const location = useLocation();

    const isShowroomRoute = location.pathname === "/showroom";
    
    return (
        <div className='app-content'>
            <Header />
            {isShowroomRoute ? <Showroom /> : <Outlet />}
            {!isShowroomRoute && <Footer />}
        </div>
    );
};

export default App;