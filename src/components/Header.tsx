/**
 * Renders header component
 * 
 * @description
 * Creates global header for consistency.
 * 
 * @returns Header HTML
 */

import logo from '../assets/one-world-logo-3Colors.svg';
import '../styles/Header.css'
import {NavLink} from 'react-router-dom'
import Searchbar from './Searchbar';

function Header() {

    return (
        <>
        <div className = 'Header'>
            <div className = "top-header">
                <div className = "logo-space">
                    <img src = {logo} alt = 'OWQ-Logo' className = 'Logo_OWQ'/>
                </div>
                <div className = "searchbar-space">
                    <Searchbar/> 
                </div>
                <div className = "donate-border">
                    <button className='donate-button'>
                        <div className="donate-background">
                          <h1 className="donate-text">donate</h1>
                        </div>
                    </button>
                </div>
                
                
            </div>
            <div className = "bottom-header">
                <div className="nav">
                    <ul>
                        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About Us</NavLink>
                        <NavLink to="/programs" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Programs</NavLink>
                        <NavLink to="/get-involved" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Get Involved</NavLink>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header