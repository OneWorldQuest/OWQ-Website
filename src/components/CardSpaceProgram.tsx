/**
 * Renders Filter inside the Programs Page for the cards to show
 * 
 * @description
 * Creates 
 * 
 * @returns Filter HTML
 */

import ProgramCard from './ProgramCard'
import '../styles/CardSpaceProgram.css'

type Program = {
    id:string;
    image:string;
    title: string;
    age: '6-10' | '11-17' | 'adult' | 'all';
    subject: 'coding' | 'robotics' | 'other';

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
                            p.age === '6-10' ? 'Kids 6-10'
                            : p.age === '11-17' ? 'Teens 11-17'
                            : p.age === 'adult' ? 'Adults'
                            : 'All Ages'
                        }
                        subject = {
                            p.subject === 'coding' ? "Coding"
                            : p.subject === 'robotics' ? 'Robotics'
                            : 'Other'
                        }
                    />
                ))}
            </div>
        </div>
        
    )
}

export default CardSpaceProgram