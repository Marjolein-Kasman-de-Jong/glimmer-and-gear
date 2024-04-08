// Icons
import { SlMagnifier } from 'react-icons/sl';

// Style
import './search-bar.css';

const SearchBar = () => {
    return (
        <aside className='search-bar'>
            <form action='#'>
                <input type="text" name='search-field' id='search-field' placeholder='What are you looking for?' />
                <SlMagnifier className='search-icon' />
            </form>
        </aside>
    );
}

export default SearchBar;