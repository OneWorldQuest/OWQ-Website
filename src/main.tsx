import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './pages/App.tsx'
import AboutUs from './pages/AboutUsPage.tsx'
import GetInvolved from './pages/GetInvolvedPage.tsx'
import Programs from './pages/ProgramsPage.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

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
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </StrictMode>,
)
