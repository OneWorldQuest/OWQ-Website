/**
 * Renders Filter inside the Programs Page for the cards to show
 * 
 * @description
 * Creates 
 * 
 * @returns Filter HTML
 */

import '../styles/ProgramCard.css'

type ProgramCardProps = {
    image: string;
    title: string;
    age: 'All Ages' | 'Kids 6-10' | 'Teens 11-17' | "Adults" | string;
    subject: 'All' | 'Coding' | 'Robotics' | 'Other' | string;
}

function ProgramCard({image, title, age, subject}: ProgramCardProps) {


    return (
        <div className='card-program'>
            <div className='card-head'>
                <img
                    src={image}
                    alt = {title}
                    className='card-image'
                    loading='lazy'
                />
            </div>
            <div className='card-body'>
                <h3 className='program-title'>{title}</h3>
                <span className='age-subject'>{age}</span>
                <span className='age-subject'>{subject}</span>
            </div>
            <div className='card-tail'>
                <div className='learn-more-btn'>Learn More</div>
                <div className='enroll-btn'>Enroll</div>
            </div>




        </div>
    )
}

export default ProgramCard