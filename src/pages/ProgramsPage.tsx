/**
 * Component file for the 'Programs' page.
 * 
 * @description
 * Renders all necessities for the page.
 * 
 * @returns Page HTML + components
 */

import './../styles/Programs.css'
import ProgramFilter from '../components/ProgramFilters'
import CardSpaceProgram from '../components/CardSpaceProgram'

function Programs() {
    return (
        <>
            <ProgramFilter></ProgramFilter>
            <CardSpaceProgram/>

        </>
    )
}

export default Programs