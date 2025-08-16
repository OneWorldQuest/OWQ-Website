/**
 * Renders Filter inside the Programs Page for the cards to show
 * 
 * @description
 * Creates 
 * 
 * @returns Filter HTML
 */

import '../styles/ProgramFilters.css'
import { FaCaretDown } from 'react-icons/fa';

type Criteria = {
    age: 'all' | '6-10' | '11-17' | 'adult';
    language: 'en' | 'en' | 'fr';
    subjects: string[];
};

type Props = {
    value: Criteria;
    onChange: (next:Criteria) => void;
};

function ProgramFilter({value, onChange }: Props ) {

    const ageOptions = ['All Ages', 'Kids 6-10', 'Teens 11-17', 'Adults'];
    const languageOptions = ['EN', 'EN', "FR"];
    const subjectOptions = ["All", 'Coding', 'Robotics', 'Other'];

    const ageVal = (label: typeof ageOptions[number]): Criteria['age'] =>
        label === 'All Ages' ? 'all'
        : label === 'Kids 6-10' ? '6-10'
        : label === 'Teens 11-17' ? '11-17'
        : 'adult';

    const langVal = (label:typeof languageOptions[number]): Criteria['language'] =>
        label.toLowerCase() as Criteria['language'];

    const subjVal = (label: typeof subjectOptions[number]) =>
        label === 'All' ? 'all' : label.toLowerCase();

    const onAgeClick = (label: typeof ageOptions[number]) => {
        const v = ageVal(label);
        onChange({...value, age: value.age === v ? 'all' : v});
    };

    const onSubjectClick = (label: typeof subjectOptions[number]) => {
        const v = subjVal(label);
        if (v==='all') {
            onChange({...value, subjects: []});
            return;
        }
        const set = new Set(value.subjects);
        set.has(v) ? set.delete(v): set.add(v);
        onChange({...value, subjects: Array.from(set) });
    };

    const onLangClick = (label: typeof languageOptions[number]) => {
        const v = langVal(label);
        onChange({...value, language: value.language === v ? 'en' : v});
    };

    const isAgeActive = (label: typeof ageOptions[number]) => value.age === ageVal(label);
    const isLangActive = (label: typeof languageOptions[number]) => value.language === langVal(label);
    const isSubjActive = (label: typeof subjectOptions[number]) => {
        const v = subjVal(label);
        return v !== 'all' && value.subjects.includes(v);
        }

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
                            <div key={index} className= {`age-option ${isAgeActive(age) ? 'active' : ''}`} onClick = {() => onAgeClick(age)}>
                                {age}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='right'>
                    <div className='selector' id='language-dropdown'>
                        {languageOptions.map((language, index) => (
                            <div key={index} className={`language-option ${isLangActive(language) ? 'active' : ''}`} onClick = {() => onLangClick(language)}>
                                {language} <FaCaretDown className='caret-icon'/>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className='bottom'>
                {subjectOptions.map((subject, index) => (
                    <div key={index} className={`subject-option ${isSubjActive(subject) ? 'active' : ''}`} onClick = {() => onSubjectClick(subject)}>
                        [{subject}]
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProgramFilter