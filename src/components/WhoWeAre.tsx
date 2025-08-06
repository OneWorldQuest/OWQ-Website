import '../styles/WhoWeAre.css';
import { FaBalanceScale, FaUsers, FaHandshake } from 'react-icons/fa';
import whoWeAreImage from '../assets/vacation-image.png';

const WhoWeAre = () => {
  return (
    <div className="who-section-wrapper">
      <div className="who-image-container">
        <img src={whoWeAreImage} alt="Who We Are" className="who-image" />
        

        <div className="who-textbox">
          <h2 className="who-heading">Who We Are</h2>
          <p className="who-paragraph">
            We are a team committed to fostering growth, equity, and learning. Through inclusive communities,
            shared values, and unwavering integrity, we empower future generations to thrive.
          </p>
        </div>
      </div>


      <div className="who-icons">
        <div className="icon-item">
          <FaBalanceScale className="icon" />
          <span>Equity</span>
        </div>
        <div className="icon-item">
          <FaUsers className="icon" />
          <span>Community</span>
        </div>
        <div className="icon-item">
          <FaHandshake className="icon" />
          <span>Integrity</span>
        </div>
      </div>
    </div>
  );
};


export default WhoWeAre;