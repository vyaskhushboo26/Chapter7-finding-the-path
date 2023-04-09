import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import AboutUs from "./component/Abouts";
import Error from "./component/Error";
import Contact from "./component/Contact";
import RestrauntMenu from "./component/RestrauntMenu";
import Login from "./component/Login";

/* 
      Hearder
        - Logo or Title
        - NavItems (right side)
        - Carts
      
      Body 
        - Search Bar
        - RestrauntList
            - RestrauntCart
                - Image
                - Name
                - Rating
                - Cusines
                
      Footer
        - Links
        - Copyrights
      
      */

const AppLayout = () =>{
  return(
    <>
      <Header />
      <Outlet />
      <Footer />
    </>  
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: < Body />
      },
      {
        path: "/about",
        element: < AboutUs />
      },
      {
        path: "/contact",
        element: < Contact />
      },
      {
        path: '/restaurant/:resId',
        element: <RestrauntMenu />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
 
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(HeadingComponent()); another way to render component

