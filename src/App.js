import logo from './logo.svg';
import './index.css';
import burger from './burger.png';
import Header from './components/Header';
import Body from './components/Body';
import Contact from './components/Contact';
import Error from './components/Error';

import RestaurantMenu from './components/RestaurantMenu';
import { lazy,Suspense } from 'react';
import React from 'react';

import { createBrowserRouter,Outlet,Link } from 'react-router-dom';



import About from './components/About';



const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
  return (
    <div className="app">


     <Header />
    <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {

    path: "/",

    element:<AppLayout />,

    children:[

      {
        path: "/",
        element: <Body />
      },

      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },

      {
        path: "/grocery",
        element: <Suspense fallback ={<h1>Loading...</h1>}><Grocery />

            </Suspense>
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }


      
    ],

    errorElement: <Error />,

  },

 
])

export default appRouter;
