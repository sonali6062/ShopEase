import React from 'react';
import { createRoot } from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import { AuthProvider } from './context/AuthProvider'; // Import AuthProvider
import App from './App.jsx';
import './index.css';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.min.css';

import Home from './home/Home.jsx';
import Blog from './blog/Blog.jsx';
import Shop from './shop/Shop.jsx';
import SingleProduct from './shop/SingleProduct.jsx';
import CartPage from './shop/CartPage.jsx';
import SingleBlog from './blog/SingleBlog.jsx';
import About from './about/About.jsx';
import Contact from './Contact/Contact.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Seller from './components/Seller.jsx';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Logout } from './components/Logout.jsx';
import Payment from './components/Payment.jsx';
import AddProduct from './components/AddProduct.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
   
    ],
  },
  
]);


createRoot(document.getElementById('root')).render(
  


    <AuthProvider> {/* Wrap your entire application with AuthProvider */}

      <RouterProvider router={router} />

    </AuthProvider>

);

