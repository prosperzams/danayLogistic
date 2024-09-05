import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './views/Root'
import Login from './views/Login'
import Register from './views/Register';
import Home from './views/login/Home';
import Facture from './views/login/Facture';
import BaseDonnes from './views/login/BaseDonnes';
import Visualiser from './views/login/Visualiser';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      
      {
        path:'',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path: '/home',
        element:<Home/>
      },
      {
        path: '/facture',
        element:<Facture/>
      },
      {
        path: '/database',
        element:<BaseDonnes/>
      },
      {
        path: '/visualize',
        element:<Visualiser/>
      },
      {
        path: '/visualize',
        element:<Visualiser/>
      }
    ]
  },
]);

export default function App() {
  return <RouterProvider router={router} />
}

