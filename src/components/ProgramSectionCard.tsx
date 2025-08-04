/**
 * Renders A card with a picture, a link, and a decription dynamically so we don't have tp make card after card if they follow the same format just be able to change the inside easy
 * 
 * @description 
 * 
 * @param {Object} Props 
 * @param {String} info - The information that will go in the cards
 * @param {String} link - This will be the link to the page we will redirect when they press Learn More. Also routing for pages we use the one in 
 * App.tsx
 * @param {String} image - This will be the route or url to the image we try to display. For routing we do ../src/assets/picture.png, unless you 
 * are using a picture that is in public you will use just the name of the picture like picture.png or picture.svg
 * 
 * @returns {JSX.Element} - a card for the program section
 * 
 * @example
 * <ProgramSectionCard
 *  image="vite.svg"
 *  info="This is the info"
 *  link="programs"
 * />
 */


import '../styles/ProgramSectionCard.css'
import { Link } from 'react-router-dom';

type Props = {
    info: string;
    link: string;
    image: string;
}

function ProgramSectionCard({info, link, image}: Props){

    return (
        <div className='program-card'>
            <img src={image} alt="Program" className="program-image"></img>
            <p className='program-p'>{info}</p>
            <Link to={link} className='program-link'>Learn More</Link>
        </div>
    );
};

export default ProgramSectionCard;