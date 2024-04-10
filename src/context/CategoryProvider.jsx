import { createContext, useState } from 'react';

export const CategoryContext = createContext(null);

function CategoryContextProvider({ children }) {
    const [category, setCategory] = useState('');

    // function changeCategory() {

    // }

    return (
        <CategoryContext.Provider value={{
            category,
            setCategory
        }}>
            {children}
        </CategoryContext.Provider>
    );
}

export default CategoryContextProvider;