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
import CoffeeDetails from './Components/CoffeeDetails.jsx';
import SignIn from './Components/SIgnIn.jsx';
import SignUp from './Components/SignUp.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Users from './Components/Users.jsx';

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
        path:"coffeeDetails/:id",
        Component: CoffeeDetails,
        loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`)
      },
      {
        path:"updateCoffee/:id",
        loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path:"signIn",
        Component: SignIn
      },
      {
        path: "signUp",
        Component: SignUp
      },
      {
        path: "users",
        loader: ()=> fetch("http://localhost:3000/users"),
        Component:Users
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
