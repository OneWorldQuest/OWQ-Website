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


function App() {
    return (
        <>
           
            <Header></Header>

            <IntroSection></IntroSection>

            {/*<img src="src/assets/teacher-kids-selfie.png" alt="Hero Image" className="events-image"/>*/}
            
            <UpcomingEvents></UpcomingEvents>
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
