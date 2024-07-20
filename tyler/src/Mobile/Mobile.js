import React from'react';
import MobileMenu from '../util/menu/MobileMenu';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MobileProfile from '../Profile/MobileProfile';


function Mobile(){

    const router = createBrowserRouter([
        {
            path: '/',
            element: <MobileProfile />
        }
    ]);

    return(
        <div style={{backgroundColor: 'black', height: '100vh'}}>
       
        <RouterProvider router={router}/>
        </div>
    )
}

export default Mobile;