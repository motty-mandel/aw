import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './app';
import Home from './components/Home';
import Connect from './components/Connect';
// import Purchases from './components/Purchases';
import Sets from './components/Sets';
import Showroom from './components/Showroom';
import Temp from "./components/temp"


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>404 Not Found</div>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/connect',
                element: <Connect />
            },
            // {
            //     path: '/purchases',
            //     element: <Purchases />
            // },
            {
                path: '/sets',
                element: <Sets />
            },
            {
                path: '/showroom',
                element: <Showroom />
            },
            {
                path: '/temp',
                element: <Temp />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);