import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Components
import SearchBar from '../../components/search-bar/SearchBar';

// Style
import './product.css';

const Product = () => {
    const { id } = useParams();

    const [productData, setProductData] = useState({});

    useEffect(() => {
        async function getProductData() {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProductData(response);
            } catch (error) {
                console.log(error);
            }
        }
        getProductData();
    }, [])

    console.log(productData)
    
    return (
        <main>
            <SearchBar />
            <h2>{productData?.data?.title}</h2>
            <article>

            </article>
        </main>
    )
}

export default Product;