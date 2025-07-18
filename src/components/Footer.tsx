// /**
//  * Renders a footer component
//  * 
//  * @description 
//  * Used on all pages for consistency. 
//  * 
//  * @returns Footer HTML
//  */


import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import OneWorldLogo from "../assets/one-world-logo-3Colors.svg"; // Adjust path if needed

function Footer() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const donationAmounts = [500, 200, 100, 50, 10]; // USD

  return (
    <footer className="footer">
      {/* Navigation at the top */}
      <div className="footer-navbar">
        <Link to="/about"><button>About Us</button></Link>
        <Link to="/"><button>Contact</button></Link>
        <Link to="/programs"><button>Programs</button></Link>
        <Link to="/get-involved"><button>Get Involved</button></Link>
      </div>

      {/* Main Content Area */}
      <div className="footer-main">
        {/* Left: Logo + Org Info */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={OneWorldLogo} alt="One World Quest Logo" />
          </div>
          <p className="org-description">
            One World Quest is a global non-profit focused on empowering communities through education,
            sustainability, and compassion. Join us in making a difference.
          </p>
        </div>

        {/* Right: Donation Box */}
        <div className="donate-box">
          <h3>Support Our Mission</h3>
          <textarea
            name="donate-msg-box"
            id="donate-msg-box"
            placeholder="Leave a message of hope..."
          />
          <div className="amount-options">
            {donationAmounts.map((amt) => (
              <button
                key={amt}
                className={`amount-btn ${selectedAmount === amt ? "selected" : ""}`}
                onClick={() => setSelectedAmount(amt)}
              >
                ${amt}
              </button>
            ))}
          </div>
          <button className="donate-btn-green">
            Donate {selectedAmount ? `$${selectedAmount}` : ""}
          </button>
        </div>
      </div>

      {/* Social Icons */}
      <div className="social-media">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="mailto:contact@oneworldquest.org" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} One World Quest. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
