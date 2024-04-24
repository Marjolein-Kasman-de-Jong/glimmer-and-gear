import { useEffect } from 'react';

// Style
import './choose-amount-menu.css';

const ChooseAmountMenu = ({ amountOfItems, setAmountOfItems, setAmountOfItemsAndId, id }) => {
    // Select standard amount on first render to prevent amount === 0 being set to shoppingCart if handleAmountChange() isn't triggered
    useEffect(() => {
        setAmountOfItems && setAmountOfItems(1);
    }, [])

    // Handle amount change
    function handleAmountChange(e) {
        const selected = Number(e.target.value);
        // Used by product page
        setAmountOfItems && setAmountOfItems(selected);
        // Used by shopping cart page, because shopping cart page needs to know which item in shoppingCart needs to be updated
        setAmountOfItemsAndId && setAmountOfItemsAndId(id, selected);
    }

    return (
        <form>
            <select
                name='choose-amount-menu'
                id='choose-amount-menu'
                value={amountOfItems}
                onChange={handleAmountChange}
            >
                <option value='1'>
                    1
                </option>
                <option value='2'>
                    2
                </option>
                <option value='3'>
                    3
                </option>
                <option value='4'>
                    4
                </option>
                <option value='5'>
                    5
                </option>
            </select>
        </form>
    );
}

export default ChooseAmountMenu;