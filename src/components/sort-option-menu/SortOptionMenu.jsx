import {useState, useEffect} from 'react';

// Style
import './sort-option-menu.css';

const SortOptionMenu = ({ setSortOption }) => {
    // Standard sortType
    const [sortType, setSortType] = useState('');

    // Select standard sorting option on first render
    useEffect(() => {
        setSortOption(sortType);
    }, [])

    // Handle sort option change
    function handleSortOptionChange(e) {
        const selected = e.target.value;
        // Update component state
        setSortType(selected);
        // Update page state
        setSortOption(selected);
    }

    return (
        <form>
            <select name='sort-by' id='sort-by' value={sortType} onChange={handleSortOptionChange}>
                <option value='' disabled>Sort by</option>
                <option value='price-l-h'>{`price (low > high)`}</option>
                <option value='price-h-l'>{`price (high > low)`}</option>
                <option value='rating'>{`rating`}</option>
            </select>
        </form>
    );
}

export default SortOptionMenu;