import logo from './logo.svg';
import './index.css';
import burger from './burger.png';
import Header from './components/Header';
import Body from './components/Body';
import Contact from './components/Contact';
import Error from './components/Error';


import Cart from './components/Cart';

import RestaurantMenu from './components/RestaurantMenu';
import { lazy,Suspense, useEffect, useState } from 'react';
import React from 'react';

import { createBrowserRouter,Outlet,Link } from 'react-router-dom';
import UserContext from './utils/UserContext';

import { Provider } from 'react-redux';



import About from './components/About';
import appStore from './utils/appStore';



const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
    

  const [userName,setUserName] = useState();

  useEffect(()=>{


    const data = {

      name: "Teja Maroju"
    }

    setUserName(data.name)
  },[]);
  return (

    

    <Provider store = {appStore}>
    <UserContext.Provider value ={{loggedInUser:userName,setUserName}} >
    <div className="app">



     <Header />
    <Outlet />
    
    </div>
    </UserContext.Provider>

    </Provider>
   
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
        path: "/cart",
        element: <Cart />
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
