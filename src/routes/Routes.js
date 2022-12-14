import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../layout/Pages/Category/Category/Category";
import Home from "../layout/Pages/Home/Home/Home";
import News from "../layout/Pages/News/News/News";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: 'category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: 'news/:id',
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`) 
            }
        ] 
    }
])