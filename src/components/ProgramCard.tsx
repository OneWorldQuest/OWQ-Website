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
    age: 'All Ages' | 'Kids 7-13' | "Adults" | string;
    subject: 'All' | 'Coding' | 'Robotics' | 'Other' | string;

    imageFit?: 'cover' | 'contain';
    imagePosition?: string;
    imageRatio?: `${number} / ${number}`
}

function ProgramCard({image, title, age, subject, imageFit = 'cover', imagePosition = 'center', imageRatio = '16 / 9',}: ProgramCardProps) {



    return (
        <div className='card-program'>
            <div className='card-head' style={{ aspectRatio: imageRatio }}>
                <img
                    src={image}
                    alt = {title}
                    className='card-image'
                    loading='lazy'
                    style={{
                        objectFit: imageFit,
                        objectPosition: imagePosition,
                    }}  
                />
            </div>
            <div className='card-body'>
                <h2 className='program-title'>{title}</h2>
                <div className='spans'>
                    <span className='age-subject'>Age Group: {age}</span>
                    <span className='age-subject'>Subject: {subject}</span>
                </div>
            </div>
            <div className='card-tail'>
                <div className='learn-more-btn'>Learn More</div>
                <div className='enroll-btn'>Enroll</div>
            </div>




        </div>
    )
}

export default ProgramCard