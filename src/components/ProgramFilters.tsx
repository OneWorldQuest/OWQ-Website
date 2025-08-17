/**
 * Renders Filter inside the Programs Page for the cards to show
 * 
 * @description
 * Creates 
 * 
 * @returns Filter HTML
 */

import '../styles/ProgramFilters.css'
import { AGE_GROUPS, LANGUAGES, SUBJECTS, type AgeGroup, type Language, type Subject } from '../constants/ProgramOptions';
import { FaCaretDown } from 'react-icons/fa';

type Criteria = {
    age: AgeGroup;
    language: Language;
    subjects: Subject[];
};

type Props = {
    value: Criteria;
    onChange: React.Dispatch<React.SetStateAction<Criteria>>;
};

function ProgramFilter({value, onChange }: Props ) {

    const ageOptions: {value: AgeGroup; label: string}[] = [
        {value: AGE_GROUPS.ALL.value, label: AGE_GROUPS.ALL.label},
        {value: AGE_GROUPS.SEVEN_TO_THIRTEEN.value, label: AGE_GROUPS.SEVEN_TO_THIRTEEN.label},
        {value: AGE_GROUPS.ADULT.value, label: AGE_GROUPS.ADULT.label},
    ];

    const languageOptions: {value: Language; label: string}[] = [
        {value: LANGUAGES.EN.value, label: LANGUAGES.EN.label},
        {value: LANGUAGES.FR.value, label: LANGUAGES.FR.label},
    ];

    const subjectOptions: {value: Subject | 'all'; label: string}[] = [
        {value: 'all', label: SUBJECTS.ALL.label},
        {value: SUBJECTS.CODING.value, label: SUBJECTS.CODING.label},
        {value: SUBJECTS.ROBOTICS.value, label: SUBJECTS.ROBOTICS.label},
        {value: SUBJECTS.OTHER.value, label: SUBJECTS.OTHER.label},
    ];

    const onAgeClick = (v: AgeGroup) => {
        onChange(prev => ({...prev, age: prev.age === v ? 'all': v}))
    };

    const onSubjectClick = (v: Subject | 'all') => {
        if (v==='all') {
            onChange(prev => ({...prev, subjects: []}));
            return;
        }
        onChange(prev => {
            const set = new Set(prev.subjects);
            set.has(v) ? set.delete(v) : set.add(v);
            return {...prev, subjects: Array.from(set) };
        });
    };

    const onLangClick = (_v: Language) => {

    };

    const isAgeActive = (v: AgeGroup) => value.age === v;
    const isLangActive = (_v: Language) => false;
    const isSubjActive = (v: Subject | 'all') => v !== 'all' && value.subjects.includes(v as Subject);

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
                        {ageOptions.map(opt => (
                            <div key={opt.value} className= {`age-option ${isAgeActive(opt.value) ? 'active' : ''}`} onClick = {() => onAgeClick(opt.value)}>
                                {opt.label}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='right'>
                    <div className='selector' id='language-dropdown'>
                        {languageOptions.map(opt => (
                            <div key={opt.value} className={`language-option ${isLangActive(opt.value) ? 'active' : ''}`} onClick = {() => onLangClick(opt.value)}>
                                {opt.label} <FaCaretDown className='caret-icon'/>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className='bottom'>
                {subjectOptions.map(opt => (
                    <div key={opt.value} className={`subject-option ${isSubjActive(opt.value) ? 'active' : ''}`} onClick = {() => onSubjectClick(opt.value)}>
                        [{opt.label}]
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProgramFilter