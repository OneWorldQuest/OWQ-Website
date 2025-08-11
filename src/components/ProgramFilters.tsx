/**
 * Renders Filter inside the Programs Page for the cards to show
 * 
 * @description
 * Creates 
 * 
 * @returns Filter HTML
 */

import '../styles/ProgramFilters.css'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

function ProgramFilter() {

    const ageOptions = ['All Ages', 'Kids 6-10', 'Teens 11-17', 'Adults'];
    const languageOptions = ['EN', 'EN', "FR"];
    const subjectOptions = ["All", 'Coding', 'Robotics', 'Other'];

    return (
        <div className='filter-space'>
            <div className='top'>

                <div className='left'>
                    Age Group Filter
                </div>

                <div className='right'>
                    Language Selector
                </div>

            </div> 
            <div className='middle'>

                <div className='left'>
                    <div className='selector' id='age'>
                        {ageOptions.map((age, index) => (
                            <div key={index} className='age-option'>
                                {age}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='right'>
                    <div className='selector' id='language-dropdown'>
                        {languageOptions.map((language, index) => (
                            <div key={index} className='language-option'>
                                {language} <FaCaretDown/>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className='bottom'>
                {subjectOptions.map((subject, index) => (
                    <div key={index} className='subject-option'>
                        [{subject}]
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProgramFilter