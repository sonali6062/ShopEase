import React, { useState } from 'react'
import { Badge } from 'react-bootstrap';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
const title = "Our Products";

const ProductData = [
  
]

function CategoryShowcase() {

    const [items, setitems] = useState(ProductData);


    // category  filtering

    const filterItem = (categItem) => {
        const updateItem=ProductData.filter((curElem)=>{
            return curElem.cate===categItem;
        })
        setitems(updateItem);
    }
    return (
        <>
            <div className='course-section style-3 padding-tb'>
                {/* shape */}
                <div className='course-shape one'>
                    <img src='/src/assets/images/shape-img/icon/01.png'></img>
                </div>
                <div className='course-shape two'>
                    <img src='/src/assets/images/shape-img/icon/02.png'></img>
                </div>

                {/* main section */}

                <div className='container'>
                    {/* section header */}

                    <div className='section-header'>
                        <h2 className='title'>{title}</h2>
                        <div className='course-filter-group'>
                            <ul className='lab-ul'>
                                <li onClick={() => setitems(ProductData)('All')}>All</li>
                                <li onClick={() => filterItem('Clothes')}>Clothes</li>
                                <li onClick={() => filterItem('Rituals')}>Rituals</li>
                                <li onClick={() => filterItem('Jewellary')}>Jewellary</li>
                                <li onClick={() => filterItem('Furniture')}>Furniture</li>
                                <li onClick={() => filterItem('Books')}>Books</li>
                                <li onClick={() => filterItem('Art and Craft')}>Art and Craft</li>
                                <li onClick={() => filterItem('Handloom')}>Handloom</li>
                            </ul>
                        </div>
                    </div>
                    {/* section body */}
                    <div className='section-wrapper'>
                        <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1'>
                            {
                                items.map((product) => (
                                    <div key={product.id} className='col'>
                                        <div className='course-item style-4'>
                                            <div className='course-inner'>
                                                <div className='course-thumb'>
                                                    <img src={product.imgUrl} alt='' />
                                                    <div className='course-category'>
                                                        <div className='course-cate'>
                                                            <a href='#'>{product.cate}</a>
                                                        </div>
                                                        <div className='course-review'>
                                                            <Rating />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* content */}
                                                <div className='course-content'>
                                                    <Link to={`/shop/${product.id}`}><h5>{product.title}</h5></Link>
                                                    <div className='course-footer'>
                                                    <div className='course-author'>
                                                    <Link to='/' className='ca-name'>{product.brand}</Link>
                                                    </div>
                                                       <div className='course-price'>
                                                       {product.price}

                                                       </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryShowcase