/**
 * Main project entry file.
 * 
 * @description
 * Functions as the entry into the website, additionally handles page routing.
 */

import { BrowserRouter,Routes,Route,} from "react-router-dom"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"
import App from './pages/App.tsx'
import AboutUs from './pages/AboutUsPage.tsx'
import GetInvolved from './pages/GetInvolvedPage.tsx'
import Programs from './pages/ProgramsPage.tsx'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="*" element={<h1 className="p-4">404 - Page Not Found</h1>} />
          </Routes>
        <Footer />
    </BrowserRouter>
  </StrictMode>
);