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

function Header() {

    return (
        <>
        <div className = 'Header'>
            <div className = "top-header">
                <div className = "logo-space">
                    <img src = {logo} alt = 'OWQ-Logo' className = 'Logo_OWQ'/>
                </div>
                <div className = "searchbar-space">
                    <h1>Search Pages...</h1> {/* this is a place holder for the searchbar component */}
                </div>
                <div className = "donate-border">
                    <button className='donate-button'>
                        <div className="donate-background">
                            <h1 className="donate-text">DONATE</h1>
                        </div>
                    </button>
                </div>
                
                
            </div>
            <div className = "bottom-header">
                <div className="nav">
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Programs</a></li>
                        <li><a href='#'>Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header