import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import mainLayout from './Layouts/mainLayout.jsx';
import Home from './Components/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: mainLayout,
    children: [
      {
        index:true,
        loader: ()=> fetch("http://localhost:3000/coffees"),
        Component: Home
      },
      {
        path:"addCoffee",
        Component: AddCoffee
      },
      {
        path:"updateCoffee",
        Component: UpdateCoffee
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
