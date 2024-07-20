import React from'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from '../Profile/Profile';



function Desktop(){

const router = createBrowserRouter([
    {
        path: '/',
        element: <Profile />
    }
]);

    return(<div>
    
<RouterProvider router={router}/>
    </div>)
  }


  export default Desktop;