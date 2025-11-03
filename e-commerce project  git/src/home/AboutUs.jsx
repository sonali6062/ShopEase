import React from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const subTitle = "Why Choose Us";
const title = " Become a seller on Heritage Mart";
const desc = "Sell on Heritage Mart.in and get a chance to receive rewards worth ₹8,000 within the first 15 days*";
const btnText = "Start Selling";

const countList = [
  
]

function AboutUs() {
    return (
        <>
            <div className='instructor-section style-2 padding-tb section-bg-ach'>
                <div className='container'>
                    <div className='section-wrapper'>
                        <div className='row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3'>
                            <div className='col'>
                                {

                                    countList.map((val, i) => (
                                        <div key={i} className='count-item'>
                                            <div className='count-inner'>
                                                <div className='count-icon'>
                                                    <i className={val.iconName}></i>
                                                </div>
                                                <div className='count-content'>
                                                    <h2>
                                                        <span className='count'><CountUp end={val.count}></CountUp></span>
                                                        <span>+</span>
                                                    </h2>
                                                    <p>{val.text}</p>

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }


                            </div>
                            <div className='col'>
                                <div className='instructor-content'>
                                    <p className='subtitle'>{subTitle}</p>
                                    <h2 className='title'>{title}</h2>
                                    <p>{desc}</p>
                                    <Link to='/seller-login' className='lab-btn'>{btnText}</Link>

                                </div>

                            </div>

                            <div className='col'>
                                <div className='instructor-thumb'>
                                    <img src='https://5.imimg.com/data5/SELLER/Default/2023/12/368187225/CE/WI/PV/199376932/8inch-padharo-sa-male-female-rajasthani-mdf-hand-printed-handmade-set-500x500.jpg'></img>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs