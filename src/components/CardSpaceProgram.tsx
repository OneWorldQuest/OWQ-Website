/**
 * Renders Filter inside the Programs Page for the cards to show
 * 
 * @description
 * Creates 
 * 
 * @returns Filter HTML
 */

import type { AgeGroup, Subject } from '../constants/ProgramOptions';
import ProgramCard from './ProgramCard'
import '../styles/CardSpaceProgram.css'

type Program = {
    id:string;
    image:string;
    title: string;
    age: AgeGroup;
    subject: Subject;

    imageFit?: 'cover' | 'contain';
    imagePosition?: string;
    imageRatio?: `${number} / ${number}`;

};

function CardSpaceProgram( {items}: {items: Program[]}) {


    return (
        <div className='space'>
            <div className='card-space'>
                {items.map(p => (
                    <ProgramCard
                        key={p.id}
                        image={p.image}
                        title={p.title}
                        age = {
                            p.age === '7-13' ? 'Kids 7-13'
                            : p.age === 'adult' ? 'Adults'
                            : 'All Ages'
                        }
                        subject = {
                            p.subject === 'coding' ? "Coding"
                            : p.subject === 'robotics' ? 'Robotics'
                            : 'Other'
                        }
                        imageFit={p.imageFit}
                        imagePosition={p.imagePosition}
                        imageRatio={p.imageRatio}
                    />
                ))}
            </div>
        </div>
        
    )
}

export default CardSpaceProgram