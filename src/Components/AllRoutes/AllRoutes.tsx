import React from 'react'
import { useRoutes } from 'react-router'
import AboutUs from '../AboutUs/AboutUs'
import Agents from '../Agents/Agents'
import Properties from '../AllProperties/Properties'
import SinglePropert from '../AllProperties/SinglePropert'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import ContactUs from '../ContactUs/ContactUs'
import HomeScreen from '../HomeScreen/HomeScreen'
import Services from '../Services/Service'
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
            element: <Properties />
        },
        {
            path : "/property-details",
            element: <SinglePropert />
        },
        {
            path: "/upload-house",
            element: <UploadHouses />
        },
        {
            path: "/agents",
            element: <Agents />
        }
    ])

  return element
}

export default AllRoutes