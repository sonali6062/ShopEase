import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ProductDisplay from './ProductDisplay';
import Review from './Review';
import PopularPost from './PopularPost';
import Tags from './Tags';

const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    // Load product data based on ID
    useEffect(() => {
        fetch('http://localhost:8002/products')
            .then(res => res.json())
            .then(data => {
                const result = data.filter(p => p.id === id);
                setProduct(result);
            })
            .catch(error => console.log(error));
    });

    return (
        <>
            <PageHeader title={'OUR SHOP SINGLE'} curPage={'shop/single products'} />
            <div className='shop-single padding-tb aside-bg'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className='product-details'>
                                    <div className='row align-items-center'>
                                        <div className='col-md-6 col-12'>
                                            <div className='product-thumb'>
                                                <div className='swiper-container pro-single-top'>
                                                    <Swiper
                                                        spaceBetween={10}
                                                        slidesPerView={1}
                                                        loop={true}
                                                        autoplay={{
                                                            delay: 2000,
                                                            disableOnInteraction: false
                                                        }}
                                                        modules={[Autoplay]}
                                                        navigation={{
                                                            prevEl: 'pro-single-prev',
                                                            nextEl: 'pro-single-prev',
                                                        }}
                                                        className="mySwiper"
                                                    >
                                                        {product.map(item => (
                                                            <SwiperSlide key={item.img}>
                                                                <div className='single-thumb'>
                                                                    <img src={item.img} alt='' />
                                                                </div>
                                                            </SwiperSlide>
                                                        ))}
                                                    </Swiper>
                                                    <div className='pro-single-next'>
                                                        <i className='icofont-rounded-left'></i>
                                                    </div>
                                                    <div className='pro-single-prev'>
                                                        <i className='icofont-rounded-right'></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6 col-12'>
                                            <div className='post-content'>
                                                <div>
                                                    {product.map(item => <ProductDisplay key={item.id} item={item} />)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='review'>
                                    <Review />
                                </div>
                            </article>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <aside className='ps-lg-4'>
                                <PopularPost />
                                <Tags />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;
