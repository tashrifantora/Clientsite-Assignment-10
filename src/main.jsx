import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProducts from './Compopnents/AddProducts/AddProducts.jsx';
import MyCart from './Compopnents/MyCart/MyCart.jsx';
import LogIn from './Authentication/LogIn/LogIn.jsx'
import Home from './Compopnents/Home/Home.jsx';
import Register from './Authentication/Register/Register.jsx';
import NotFound from './Compopnents/NotFound/NotFound.jsx';
import AuthProvider from './Authentication/Provider/AuthProvider.jsx';
import PrivateRoute from './Authentication/PrivateRoute/PrivateRoute.jsx';
import BrandedCars from './Compopnents/BrandedCars/BrandedCars.jsx';
import CarDetails from './Compopnents/CarDetails/CarDetails.jsx';
import UpdateForm from './Compopnents/UpdateForm/UpdateForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/car.json')
      },
      {
        path: "/addproducts",
        element: <PrivateRoute>
          <AddProducts></AddProducts>
        </PrivateRoute>,
        loader: () => fetch('/car.json')
      },
      {
        path: "/mycart/:id",
        element: <PrivateRoute>
          <MyCart></MyCart>
        </PrivateRoute>,
        loader: async () => await fetch(`https://velocity-vertex-server.vercel.app/mycart`)
      },
      // Try
      {
        path: "/mycart",
        element: <PrivateRoute>
          <MyCart></MyCart>
        </PrivateRoute>,
        loader: async () => await fetch(`https://velocity-vertex-server.vercel.app/mycart`)
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/brandedcar-details/:id",
        element: <PrivateRoute>
          <CarDetails></CarDetails>
        </PrivateRoute>,
        loader: async ({ params }) => await fetch(`https://velocity-vertex-server.vercel.app/product-details/${params.id}`)
      },
      {
        path: "/brandedcars/:id",
        element: <BrandedCars></BrandedCars>,
        loader: () => fetch(`/car.json`)
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      },
      {
        path: "/updateinfo/:id",
        element: <UpdateForm></UpdateForm>,
        loader: ({ params }) => fetch(`https://velocity-vertex-server.vercel.app/product-details/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
