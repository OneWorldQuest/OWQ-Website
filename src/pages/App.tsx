/**
 * Component file for the 'Home' page.
 * 
 * @description
 * Renders all necessities for the page.
 * 
 * @returns Page HTML + components
 */

import {Link} from "react-router-dom"
import './../styles/App.css'
import IntroSection from "../components/IntroSection.tsx"
import UpcomingEvents from "../components/UpcomingEvents.tsx"
import OurImpact from "../components/OurImpact.tsx"

function App() {
    return (
        <>

            <IntroSection></IntroSection>
            

            <UpcomingEvents></UpcomingEvents>

            <div style={{ position: 'relative' }}>

                <div className="cta-card">
                    <div className="overlay">
                        <img src="src/assets/hand-heart-line-1.svg" className="icon"/>
                             <h2 className="title">Support Us</h2>
                     <button className="cta-button">Donate</button>
                    </div>
                </div>

                <div className="cta-card second-card">
                 <div className="overlay" style={{backgroundColor: "rgba(0, 89, 156, 0.85)"}}>
                <img src="src/assets/service-line.svg" className="icon"/>
                        <h2 className="title">Join Our Team</h2>
                    <button className="cta-button" style={{color: 'darkblue'}}>Volunteer</button>
                        </div>
                    </div>
                    
                    <OurImpact></OurImpact>
            </div>

            <h1>This is the home page!</h1>
            <h3>Check out some of the other pages here:</h3>
            <ul>
                <li><Link to={"/about"}><button>About Us</button></Link></li>
                <li><Link to={"/programs"}><button>Programs</button></Link></li>
                <li><Link to={"/get-involved"}><button>Involvement</button></Link></li>
            </ul>

            <Footer></Footer>
        </>
    )
}

export default App
