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
                    <a> Navbar:  </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header