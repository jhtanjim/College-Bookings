import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Colleges from '../Pages/Shared/Colleges/Colleges';
import Home from '../Pages/Home/Home/Home';
import CollegeDetails from '../Pages/Shared/CollegeDetails/CollegeDetails';
import Addmission from '../Pages/Shared/Addmission/Addmission';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import MyCollege from '../Pages/Shared/MyCollege/MyCollege';
import NotFound from '../Pages/Shared/NotFound/NotFound';
import PrivateRoutes from './PrivateRoutes';
import SubmitCollege from '../Pages/Shared/SubmitCollege/SubmitCollege';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/colleges',
                element: <Colleges></Colleges>
            },
            {
                path: 'collegeDetails/:id',
                element: <CollegeDetails></CollegeDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/colleges/${params.id}`)
            },
            {
                path: 'addmission',
                element: <Addmission></Addmission>
            },
            {
                path: 'submitCollege',
                element: <PrivateRoutes>
                    <SubmitCollege></SubmitCollege>
                </PrivateRoutes>


            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'myCollege',
                element: <MyCollege></MyCollege>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
]);

export default router;
