import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Courses from "../Pages/Courses/Courses";
import EachCourseDetail from "../Pages/Courses/EachCourseDetail/EachCourseDetail";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
              path: '/',
              element: <Home></Home>  
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/courses',
                loader: ()=>fetch('https://tech-learners-server.vercel.app/all-courses'),
                element: <Courses></Courses>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/course-category/:id',
                element: <EachCourseDetail></EachCourseDetail>,
                loader: ({params}) => fetch(`https://tech-learners-server.vercel.app/course-category/${params.id}`)
            },
            {
                path: '/all-courses/:id',
                element: <EachCourseDetail></EachCourseDetail>,
                loader: ({params}) => fetch(`https://tech-learners-server.vercel.app/all-courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params}) => fetch(`https://tech-learners-server.vercel.app/all-courses/${params.id}`)
            },
            {
                path: '/profile',
                element: <ProfilePage></ProfilePage>
            }
        ]
    }
])