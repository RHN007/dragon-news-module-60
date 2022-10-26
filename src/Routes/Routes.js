import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Catagories from "../Pages/Catagories/Catagories";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Register from "../Pages/Register/Register";
import TermsAndConditions from "../Pages/Shared/Others/TermsAndConditions/TermsAndConditions";
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";




export const routes = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>, 
        children: [
            {
                path: '/', 
                element: <Home></Home>, 
                loader: () => fetch('http://localhost:6001/news')
            }, 
            {
                path: '/category/:id', 
                element: <Catagories></Catagories>, 
                loader: ({params}) => fetch(`http://localhost:6001/category/${params.id}`)
            }, 
            {
                path: '/news/:id',
                element: <PrivateRoutes><News></News></PrivateRoutes>, 
                loader: ({params}) => fetch(`http://localhost:6001/news/${params.id}`)
            }, 
            {
                path: '/login', 
                element: <Login></Login>
            }, 
            {
                path: '/register', 
                element: <Register></Register>
            }, 
            {
                path:'/terms',
                element: <TermsAndConditions></TermsAndConditions>
            }
        ]
    }




])