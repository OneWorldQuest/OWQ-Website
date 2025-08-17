/**
 * Component file for the 'Programs' page.
 * 
 * @description
 * Renders all necessities for the page.
 * 
 * @returns Page HTML + components
 */

import './../styles/Programs.css'
import type {AgeGroup, Subject, Language} from './../constants/ProgramOptions'
import {useMemo, useState} from 'react';
import ProgramFilter from '../components/ProgramFilters'
import CardSpaceProgram from '../components/CardSpaceProgram'

type Program = {
    id: string;
    image: string;
    title: string;
    age: AgeGroup;
    subject: Subject;
    language: Language;
};

type Criteria = {
    age: AgeGroup;
    language: Language;
    subjects: Subject[];
};

const ALL_PROGRAMS: Program[] = [ // This is where we make cards manually, could eventually use json for this.
    {id: '1', image: '../src/assets/robotic.png', title: 'Robotics', age: '7-13', subject: 'robotics', language: 'en'},
    {id: '2', image: '../src/assets/robotic.png', title: 'Creative Coders', age: '7-13', subject: 'coding', language: 'en'},
    
];

function Programs() {

    const [criteria, setCriteria] = useState<Criteria> ({

        age: 'all',
        language: 'en',
        subjects: [],

    });

    const filtered = useMemo(() => {
                return ALL_PROGRAMS.filter(p => {
                    if (criteria.age !== 'all' && p.age !== criteria.age) return false;

                    if (criteria.language !== 'en' && p.language !== criteria.language) return false;

                    if (criteria.subjects.length > 0 && !criteria.subjects.includes(p.subject)) return false;

                    return true;
                });
            }, [criteria]);

    return (
        <>

            <ProgramFilter value={criteria} onChange={setCriteria} />
            <CardSpaceProgram items={filtered}/>

        </>
    )
}

export default Programs