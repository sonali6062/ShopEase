import React from 'react';
import { Link } from 'react-router-dom';

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
   
    
];

function HomeCategory() {
    return (
        <>
            <div className='category-selection style-4 padding-tb'>
                <div className='container'>

                    {/* selection header */}
                    <div className='section-header text-center'>
                        <span className='subtitle'>{subTitle}</span>
                        <h2 className='title'>{title}</h2>
                    </div>

                    {/* section card */}

                    <div className='section-wrapper'>
                        <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                            {
                                categoryList.map((val, i) => (
                                    <div key={i} className='col'>
                                        <Link to='/shop' className='category-inner'>
                                            <div className='category-inner'>
                                                {/* image thumbnail */}
                                                <div className='category-thumb'>
                                                    <img src={val.imgUrl} alt='' />
                                                </div>

                                                {/* content */}
                                                <div className='category-content'>
                                                    <div className='cate-icon'>
                                                        <i className={`${val.iconName}`}><span><span>  </span></span></i>

                                                        <Link to='/shop'><h6>{val.title}</h6></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                        </div>

                    </div>

                </div>
                <div className='text-center '>
                    <Link to='/shop' className='lab-btn'><span>{btnText}</span></Link>
                </div>
            </div>
        </>
    );
}

export default HomeCategory;
