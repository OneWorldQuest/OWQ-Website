/**
 * Main project entry file.
 * 
 * @description
 * Functions as the entry into the website, additionally handles page routing.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './pages/App.tsx'
import AboutUs from './pages/AboutUsPage.tsx'
import GetInvolved from './pages/GetInvolvedPage.tsx'
import Programs from './pages/ProgramsPage.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {path:"/", element: <App />},
  {path:"/about", element: <AboutUs />},
  {path:"/get-involved", element: <GetInvolved />},
  {path:"/programs", element: <Programs />}
])

createRoot(document.getElementById('root')!).render( 
  // The goal is to dynamically load the content, such that the header + footer doesn't have to reload.
  // For now, the 'Home' page is being currently loaded.
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
