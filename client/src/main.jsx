import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './app';
import Home from './components/Home';
import Connect from './components/Connect';
import Sets from './components/Sets';
import Showroom from './components/Showroom';
import Success from "./components/Success";
import Sold from "./components/Sold";

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
            {
                path: '/sets',
                element: <Sets />
            },
            {
                path: '/showroom',
                element: <Showroom />
            },
            {
                path: "/success",
                element: <Success />
            },
            {
                path: "/sold",
                element: <Sold />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);