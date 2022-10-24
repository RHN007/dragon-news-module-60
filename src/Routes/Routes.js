import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Catagories from "../Pages/Catagories/Catagories";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";




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
                element: <News></News>, 
                loader: ({params}) => fetch(`http://localhost:6001/news/${params.id}`)
            }
        ]
    }




])