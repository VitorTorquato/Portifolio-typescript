import { createBrowserRouter } from "react-router-dom";


import { Home } from "../pages/home";
import { AboutMe } from "../pages/aboutme";
import { Projects } from "../pages/projects";
import { Layout } from "../layout";
import { Skills } from "../pages/skills";


const router = createBrowserRouter([


        {
            element: <Layout/>,
            children: [
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path: '/aboutme',
                    element: <AboutMe/>
                },
                {
                    path: '/skills',
                    element: <Skills/>
                },
                {
                    path:'/projects',
                    element:<Projects/>
                }
            ]
        }
])

export {router}