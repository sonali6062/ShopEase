import { useState, useEffect } from 'react';
import axios from 'axios';
import SelectedCategory from '../components/SelectedCategory';

const SearchInHome = () => {
    const [searchInput, setSearchInput] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:8002/products');
                setProducts(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);
        const filtered = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredProducts(filtered);
    }

    return (
        <>
            <div className='banner-section style-4'>
                <div className='container'>
                    <div className='banner-content'>
                        <form>
                            <SelectedCategory select={'all'}/>
                            <input type='text' name='search' id='search' placeholder='Search your product' value={searchInput} onChange={handleSearch} />
                            <button type='submit'>
                                <i className="icofont-search"></i>
                            </button>
                        </form>
                        <ul className='lab-ul'>
                            {
                                filteredProducts.map((product, i) =>
                                    <li key={i}>
                                        <a href={`/shop/${product.id}`}>{product.name} - {product.category}</a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchInHome;
