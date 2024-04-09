import {useState, useEffect} from 'react';

// Style
import './choose-amount-menu.css';

const ChooseAmountMenu = ({ setAmountOfItems }) => {
    // Standard amount
    const [amount, setAmount] = useState(0);

    // Select standard amount on first render
    useEffect(() => {
        setAmountOfItems(amount);
    }, [])

    // Handle amount change
    function handleAmountChange(e) {
        const selected = e.target.value;
        // Update component state
        setAmount(selected);
        // Update page state
        setAmountOfItems(selected);
    }

    return (
        <form>
            <select name='choose-amount' id='choose-amount' value={amount} onChange={handleAmountChange}>
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