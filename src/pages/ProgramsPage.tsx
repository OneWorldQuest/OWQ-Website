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

function Programs() {
    return (
        <>
            <ProgramFilter></ProgramFilter>
        </>
    )
}

export default Programs