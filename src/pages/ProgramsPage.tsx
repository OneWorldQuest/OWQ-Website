/**
 * Component file for the 'Programs' page.
 * 
 * @description
 * Renders all necessities for the page.
 * 
 * @returns Page HTML + components
 */

import './../styles/Programs.css'
import {useMemo, useState} from 'react';
import ProgramFilter from '../components/ProgramFilters'
import CardSpaceProgram from '../components/CardSpaceProgram'

type Program = {
    id: string;
    image: string;
    title: string;
    age: '6-10' | '11-17' | 'adult' | 'all';
    subject: 'coding' | 'robotics' | 'other';
    language: 'en' | 'en' | 'fr';
};

type Criteria = {
    age: 'all' | '6-10' | '11-17' | 'adult';
    language: 'en' | 'en' | 'fr';
    subjects: string[];
};

const ALL_PROGRAMS: Program[] = [ // This is where we make cards manually could eventually use json for this
    {id: '1', image: '../src/assets/one-world-logo-3Colors.svg', title: 'Program Title', age: 'all', subject: 'coding', language: 'en'},
    {id: '2', image: '../src/assets/one-world-logo-3Colors.svg', title: 'Program Title', age: 'adult', subject: 'coding', language: 'en'},
    {id: '3', image: '../src/assets/one-world-logo-3Colors.svg', title: 'Program Title', age: '11-17', subject: 'robotics', language: 'en'},
    {id: '3', image: '../src/assets/one-world-logo-3Colors.svg', title: 'Program Title', age: '6-10', subject: 'other', language: 'en'},
    {id: '3', image: '../src/assets/one-world-logo-3Colors.svg', title: 'Program Title', age: '11-17', subject: 'robotics', language: 'en'},
    {id: '3', image: '../src/assets/one-world-logo-3Colors.svg', title: 'Program Title', age: '11-17', subject: 'robotics', language: 'en'},
    {id: '3', image: '../src/assets/one-world-logo-3Colors.svg', title: 'Program Title', age: '11-17', subject: 'robotics', language: 'en'},
    {id: '3', image: '../src/assets/one-world-logo-3Colors.svg', title: 'Program Title', age: '11-17', subject: 'robotics', language: 'en'},
    {id: '3', image: '../src/assets/one-world-logo-3Colors.svg', title: 'Program Title', age: '11-17', subject: 'robotics', language: 'en'},
    {id: '3', image: '../src/assets/one-world-logo-3Colors.svg', title: 'Program Title', age: '11-17', subject: 'robotics', language: 'en'},
    {id: '3', image: '../src/assets/one-world-logo-3Colors.svg', title: 'Program Title', age: '11-17', subject: 'robotics', language: 'en'},
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