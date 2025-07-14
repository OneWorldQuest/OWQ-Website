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
                <button className = "donate-space">
                    <h1 className='Donate-text'>Donate</h1> {/* this is a place holder for the donate component button */}
                </button>
                
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