import React from 'react'
import { useRoutes } from 'react-router'
import AboutUs from '../AboutUs/AboutUs'
import Agents from '../Agents/Agents'
import Properties from '../AllProperties/Properties'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import ContactUs from '../ContactUs/ContactUs'
import HomeScreen from '../HomeScreen/HomeScreen'
import PageNotFound from '../PageNotFound'
import Services from '../Services/Service'
import SingleProperty from '../SingleProperty/SingleProperty'
import UploadHouses from '../Upload Houses.tsx/UploadHouses'

const AllRoutes = () => {

    const element = useRoutes([
        {
            path: "/",
            element: <HomeScreen />
        },
        {
            path: "/signup",
            element: <SignUp />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/about-us",
            element: <AboutUs />
        },
        {
            path: "/contact-us",
            element: <ContactUs />
        },
        {
            path: "/services",
            element: <Services />
        },
        {
            path: "/all-properties",

            children:[
                {
                    index: true,
                    element: <Properties />
                },
                {
                    path: "/all-properties/property-details",
                    element: <SingleProperty />
                }
            ]
        },
        {
            path: "/upload-house",
            element: <UploadHouses />
        },
        {
            path: "/agents",
            element: <Agents />
        },
        {
            path: "*",
            element: <PageNotFound />
        }
    ])

  return element
}

export default AllRoutes