import React from 'react';
import PageHeader from '../components/PageHeader';

const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Experiences";
const desc = "Distinctively provide access to multifunctional users whereas transparent processes incentivize efficient functionalities rather than extensible architecture. Communicate leveraged services and cross-platform.";

const year = "Start";
const expareance = "Up";

const aboutList = [
    { imgUrl: 'https://cdn-icons-png.flaticon.com/128/14676/14676084.png', imgAlt: 'about icon rajibraj91 rajibraj', title: 'Mission', desc: 'Our mission is to celebrate and sustain traditional artisans and their time-honored techniques while providing customers with authentic and high-quality traditional products.', },
    { imgUrl: 'https://cdn-icons-png.flaticon.com/128/4215/4215285.png', imgAlt: 'about icon rajibraj91 rajibraj', title: 'History', desc: 'Founded on a love for traditional craftsmanship,  Heritage Mart started with a vision to share the beauty and cultural significance of traditional goods with the world.', },
    { imgUrl: 'https://cdn-icons-png.flaticon.com/128/7829/7829198.png', imgAlt: 'about icon rajibraj91 rajibraj', title: 'Team', desc: 'Meet the passionate individuals behind Heritage Mart, dedicated to curating unique traditional goods and providing exceptional customer experiences.', },
];

const About = () => {
    return (
        <>
            <PageHeader title={'About Our Brand'} curPage={'About'} />
            <div className='about-section style-3 padding-tb section-bg'>
                <div className='container'>
                    <div className='row justify-content-center row-cols-xl-2 row-cols-1 align about-item-center'>
                        <div className='col'>
                            <div className='about-left'>
                                <div className='about-thumb'>
                                    <img src='/src/assets/images/about/s.jpg' alt='' />
                                </div>
                                {/* <div className='abs-thumb'>
                                    <img src='https://media.tenor.com/i1lvpt7wD6AAAAAj/diwali-sparkles-mubarak.gif' alt='' />
                                </div> */}
                                <div className='about-left-content'>
                                    <h3>{year}</h3>
                                    <p>{expareance}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='about-right'>
                                <div className='section-header'>
                                    <span className='subtitle'>{subTitle}</span>
                                    <h2 className='title'>{title}</h2>
                                    <p>{desc}</p>
                                </div>
                                <div className='section-wrapper'>
                                    <ul className='lab-ul'>
                                        {
                                            aboutList.map((val, i) => (
                                                <li key={i}>
                                                    <div className='sr-left'>
                                                        <img src={val.imgUrl} alt={val.imgAlt} />
                                                    </div>
                                                    <div className='sr-right'>
                                                        <h5>{val.title}</h5>
                                                        <p>{val.desc}</p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
