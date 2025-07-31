/**
 * Renders header component
 * 
 * @description
 * Creates global header for consistency.
 * 
 * @returns Header HTML
 */


import '../styles/Program_Section_card.css'
import { Link } from 'react-router-dom';

type Props = {
    info: string;
    link: string;
    image: string;
}

function Programs_Section_Card({info, link, image}: Props){

    return (
        <div className='program-card'>
            <img src={image} alt="Program" className="program-image"></img>
            <p className='program-p'>{info}</p>
            <Link to={link} className='program-link'>Learn More</Link>
        </div>
    );
};

export default Programs_Section_Card;