import {Link} from "react-router-dom"
import './../styles/App.css'
import Header from "./../components/Header.tsx"
import IntroSection from "../components/IntroSection.tsx"

function App() {
    return (
        <>
           
            <Header></Header>

            <IntroSection></IntroSection>

            <h1>This is the home page!</h1>
            <h3>Check out some of the other pages here:</h3>
            <ul>
                <li><Link to={"/about"}><button>About Us</button></Link></li>
                <li><Link to={"/programs"}><button>Programs</button></Link></li>
                <li><Link to={"/get-involved"}><button>Involvement</button></Link></li>
            </ul>
        </>
    )
}

export default App