// /**
//  * Renders a search bar component
//  * 
//  * @description 
//  * Can be reused 
//  * 
//  * @returns searchbar html
//  */

import '../styles/Searchbar.css';
import { useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

function Searchbar() {

const [query, setQuery] = useState('');
const navigate = useNavigate();
const inputRef = useRef(null);

const pages = [
    {name: 'Home', path: '/'},
    {name: 'About US', path: '/about'},
    {name: 'Get Involved', path: '/get-involved'},
    {name: 'Programs', path: '/programs'}
];

const filteredPages = pages.filter(page => page.name.toLowerCase().includes(query.toLowerCase()));

const handleSelect = (path: string) => {
    navigate(path);
    setQuery('')
}

    return (
        <div className='search-wrapper'>
            <input
            ref={inputRef}
            type='text'
            className={`search-input ${query && document.activeElement === inputRef.current ? 'dropdown-open' : ''}`}
            placeholder='Search Pages'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            {document.activeElement === inputRef.current && query && (
                <div className='search-dropdown'>
                    {filteredPages.length > 0 ? (
                        filteredPages.map((page, index) => (
                            <div
                                key={index}
                                className='search-item'
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => handleSelect(page.path)}
                            >
                                {page.name}
                            </div>
                        ))
                    ) : (
                        <div className='search-item search-no-results'>No results found</div>
                    )}
                </div>
            )}
        </div>
        
    );
}

export default Searchbar;