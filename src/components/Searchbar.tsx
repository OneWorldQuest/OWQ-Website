// /**
//  * Renders a search bar component
//  * 
//  * @description 
//  * Can be reused 
//  * 
//  * @returns searchbar html
//  */

import '../styles/Searchbar.css';

function Searchbar() {
    return (
        <input
        type='text'
        className='search-input'
        placeholder='Search Pages'
        />
    )
}

export default Searchbar;