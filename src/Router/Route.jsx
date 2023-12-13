import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { createBrowserRouter } from "react-router-dom";
import Projects from "../Pages/Projects/Projects";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import MainLayout from "../Layouts/MainLayout/MainLayout";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/projects',
          element:<Projects></Projects>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
      ]
    },
  ]);

  export default Routes;