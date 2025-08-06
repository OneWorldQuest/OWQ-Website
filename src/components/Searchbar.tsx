// /**
//  * Renders a search bar component
//  * 
//  * @description 
//  * Can be reused 
//  * 
//  * @returns searchbar html
//  */

import '../styles/Searchbar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Searchbar() {

const [query, setQuery] = useState('');
const navigate = useNavigate();

const pages = [
    {name: 'Home', path: '/'},
    {name: 'About US', path: '/about'},
    {name: 'Get Involved', path: '/get-involved'},
    {name: 'Programs', path: '/programs'}
];

const filteredPages = pages.filter(page => page.name.toLowerCase().includes(query.toLowerCase()));

    return (
        <input
        type='text'
        className='search-input'
        placeholder='Search Pages'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
    )
}

export default Searchbar;