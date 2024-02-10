import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import SingleRestaurant from './components/SingleRestaurant.js';
import Shimmer from './components/Shimmer.js';
// import Grocery from './components/Grocery.js';

const Grocery = lazy(() => import('./components/Grocery.js'));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
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
        element: <Suspense fallback={ <Shimmer /> }><Grocery /></Suspense>
      },
      {
        path: "/restaurant/:resId",
        element: <SingleRestaurant />
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={ appRouter } />);