import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import App from "../App";
import SignIn from '../generales/SignIn'
import SignUp from '../generales/SignUp';
import Cities from "../pages/CitiesContainer";
import CityDetailContainer from "../pages/CityDetailContainer";
const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<App/>,
            },
            {
                path:"/signin",
                element:<SignIn/>,
            },
            {
                path:"/signup",
                element:<SignUp/>,
            },
            {
                path:"/cities",
                element:<Cities/>,
            },
            {
                path:"/cities/:id",
                element:<CityDetailContainer/>,
            },
        ]
    }
])

export default router