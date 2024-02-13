import React, { Suspense, lazy, useState, useEffect } from 'react';
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
import UserContext from './utils/UserContext.js';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import Cart from './components/Cart.js';
// import Grocery from './components/Grocery.js';

const Grocery = lazy(() => import('./components/Grocery.js'));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Reshma Lihe"
    }
    setUserName(data.name);
  }, []);

  return (
    <Provider store={ appStore }>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }} >
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={ appRouter } />);