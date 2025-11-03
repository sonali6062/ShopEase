import { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = ({ products }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className='widget widget-search'>
            <form className='search-wrapper mb-3'>
                <input
                    type='text'
                    name='search'
                    id='search'
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type='submit'>
                    <i className='icofont-search-2'></i>
                </button>
            </form>

            {/* Showing search result */}
            {searchTerm && (
                <div>
                    {filteredProducts.map((product) => (
                        <Link key={product.id} to={`/shop/${product.id}`}>
                            <div className='d-flex gap-3 p-25' 
                                  style={{ borderBottom: '1px solid #ccc' }}>
                                <img src={product.img} alt={product.name} width={70} className='flex-grow-0' />
                                <div>{product.name}</div>
                                <div>Rs.{product.price}</div>

       
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
