import {useState, useEffect} from 'react';

// Style
import './choose-amount-menu.css';

const ChooseAmountMenu = ({ setAmountOfItems }) => {
    // Standard amount
    const [amount, setAmount] = useState(1);

    // Select standard amount on first render
    useEffect(() => {
        setAmountOfItems(amount);
    }, [])

    // Handle amount change
    function handleAmountChange(e) {
        const selected = Number(e.target.value);
        // Update component state
        setAmount(selected);
        // Update page state
        setAmountOfItems(selected);
    }

    return (
        <form>
            <select name='choose-amount-menu' id='choose-amount-menu' value={amount} onChange={handleAmountChange}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
        </form>
    );
}

export default ChooseAmountMenu;