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
    imageFit?: 'cover' | 'contain';
    imagePosition?: string;
    imageRatio?: `${number} / ${number}`;
};

type Criteria = {
    age: AgeGroup;
    language: Language;
    subjects: Subject[];
};

const ALL_PROGRAMS: Program[] = [ // This is where we make cards manually, could eventually use json for this.
    {id: '1', image: '../src/assets/robotic.png', title: 'Robotics', age: '7-13', subject: 'robotics', language: 'en', imageFit: 'cover', imagePosition: '', imageRatio: '16 / 9'},
    {id: '2', image: '../src/assets/teachers-teaching-to-students.png', title: 'Creative Coders', age: '7-13', subject: 'coding', language: 'en', imageFit: 'cover', imagePosition: 'center top', imageRatio: '16 / 9'},
    {id: '3', image: '../src/assets/one-world-logo-3Colors.svg', title: 'Digital Dreamers', age: '7-13', subject: 'coding', language: 'en', imageFit: 'contain', imagePosition: '', imageRatio: '16 / 9'},
    {id: '4', image: '../src/assets/kids-playing-uno.jpg', title: 'Scratch Starter', age: '7-13', subject: 'coding', language: 'en', imageFit: 'cover', imagePosition: '0 20%', imageRatio: '16 / 9'},
    {id: '5', image: '../src/assets/one-world-logo-3Colors.svg', title: 'Coding Course', age: 'adult', subject: 'coding', language: 'en', imageFit: 'contain', imagePosition: '', imageRatio: '1 / 1'},
    {id: '6', image: '../src/assets/one-world-logo-3Colors.svg', title: 'Cybersecurity', age: 'adult', subject: 'coding', language: 'en', imageFit: 'contain', imagePosition: '', imageRatio: '1 / 1'},
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