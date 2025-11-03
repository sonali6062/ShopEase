import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProductCard from './ProductCards';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Tags from './Tags';
import axios from "axios";
import { useAuth } from '../context/AuthProvider'; // Import the useAuth hook
import { Link } from 'react-router-dom';

const showResult = 'Showing 01-12 of 139 Result';

const Shop = () => {
    const [gridList, setGridList] = useState(true);
    const [originalProducts, setOriginalProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const { isLoggedin } = useAuth(); // Use the useAuth hook to check if the user is logged in

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get('http://localhost:8002/products');
                console.log(res.data);
                setOriginalProducts(res.data);
                setProducts(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, []);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const indexofLastProduct = currentPage * productsPerPage;
    const indexofFirstProduct = indexofLastProduct - productsPerPage;
    const currentProducts = products.slice(indexofFirstProduct, indexofLastProduct);

    // Function to change the current page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Filter products based on category
    const [selectedCategory, setSelectedCategory] = useState('All');
    const menuItem = [...new Set(originalProducts.map((val) => val.category))];

    const filterItem = (currentCategory) => {
        if (currentCategory === 'All') {
            setProducts(originalProducts); // Reset to original products
        } else {
            const newItem = originalProducts.filter((newVal) => {
                return newVal.category === currentCategory;
            });
            setProducts(newItem);
        }
        setSelectedCategory(currentCategory);
    };

    return (
        <>
            <PageHeader title='Our Shop Page' curPage='Shop' />
            {/* shop page */}
            <div className='shop-page padding-tb'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        {/* left side logic */}
                        <div className='col-lg-8 col-12'>
                            <div className='shop-title d-flex flex-wrap justify-content-between'>
                                <p>{showResult}</p>
                                {/* layout and title here */}
                                <div className={`product-view-mode ${gridList ? 'gridActive' : 'listActive'}`}>
                                    <a className='grid' onClick={() => setGridList(!gridList)}>
                                        <i className='icofont-ghost'></i>
                                    </a>
                                    <a className='grid' onClick={() => setGridList(!gridList)}>
                                        <i className='icofont-listine-dots'></i>
                                    </a>
                                </div>
                            </div>
                            {/* product card */}
                            <div>
                                {/* Check if the user is logged in before rendering the ProductCard */}
                                {isLoggedin ? (
                                    <>
                                        <ProductCard gridList={gridList} products={currentProducts} />
                                        <Pagination
                                            productsPerPage={productsPerPage}
                                            totalProducts={products.length}
                                            paginate={paginate}
                                            activePage={currentPage}
                                        />
                                    </>
                                ) : (
                                    <div>
                                        <p>Please <Link to="/login">login</Link> or <Link to="/sign-up">sign up</Link> to view the products.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <aside>
                                {/* search category */}
                                <Search products={products} gridList={gridList} />

                                {/* ShopCategory */}
                                <ShopCategory
                                    filterItem={filterItem}
                                    menuItem={menuItem}
                                    selectedCategory={selectedCategory}
                                />
                                <PopularPost/>
                                <Tags/>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;
