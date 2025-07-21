/**
 * Component file for the 'Programs' page.
 * 
 * @description
 * Renders all necessities for the page.
 * 
 * The page is split into 3 areas
 * 
 * area 1 is the hero banner
 * 
 * area 2 is the filter stuff and they are split into two sections left and right
 * left has 3 split sections in it
 * right has only 2 sections as the last one is not needed
 * 
 * area 3 is the grid section showing programs we have as cards - cards not made yet
 * 
 * @returns Page HTML + components
 */

import './../styles/Programs.css'
import Header from './../components/Header'
import Footer from "../components/Footer.tsx"

function Programs() {
    return (
        <>  
            <Header></Header>
            

            <div className='programs-pg'>
                <div className='hero-banner-space'>         {/* We will have the images here */}
                    <h1>Hero Banner</h1>
                </div>
                <div className='filter-space'>
                    <div className='left-filter-space'>
                        <div className="top-filter">
                            Age Group Filter                {/* Here we add the h tags or whatever tag we need */}
                        </div>
                        <div className="middle-filter">
                            <div className='nav-filter'>    {/* Here we will add buttons I guess to be able to filter */}
                                <h1 style={{color:'white'}}>Filter Nav</h1>
                            </div>
                        </div>
                        <div className="bottom-filter">     {/* Here we will add the options like: All, Coding, Robotics, and Others */}
                            <h1>Other FIlter Options</h1>
                        </div>
                    </div>
                    <div className='right-filter-space'>
                        <div className='top-filter'>
                            Language Selector
                        </div>
                        <div className='middle-filter'>
                            <div className='nav-filter'>    {/* Here we will add buttons I guess to be able to filter */}
                                <h3 style={{color:'white'}}>Language Selector Nav</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='programs-grid-space'>       {/* This one will have to wait since it depends on cards and the filters */}
                    <h1>Grid Section for the programs</h1>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Programs