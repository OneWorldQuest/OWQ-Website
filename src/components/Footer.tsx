import { SocialIcon } from 'react-social-icons'
import '../styles/Footer.css';

function Footer() {
    return(
    <footer className='footer'>
        <div className='footer_top'>
            <nav className='footer_nav'>
            <a href="/about">About Us</a>
            <a href="/connect">Connect Us</a>
            <a href="/programs">Programs</a>
            <a href="/get-involved">Get Involved</a>
            {/* <a href="/sign-up">Sign Up</a> */}
            </nav>
            
            <div className='footer_cta'>
                <div className='footer_message'>Some Message</div>
                <button className='footer_donate'>Donate Us</button>
            </div>
        </div>

        <div className='footer_social'>
            <SocialIcon className='social_icons' bgColor='black' network='facebook' href=''/>
            <SocialIcon className='social_icons' bgColor='black'network='instagram' href='' />
            <SocialIcon className='social_icons' bgColor='black'network='whatsapp' href=''/>
            <SocialIcon className='social_icons' bgColor='black'network='twitter' href=''/>
        </div>

        <div className='footer_bottom'>
            <div className='footer_logo'>LOGO</div>
            <div className='footer_copy'>
                Organization Name, ALL rights reserved.
                <div className='footer_legal'>
                    <a href="/faq">FAQ</a> | <a href="/privacy">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer