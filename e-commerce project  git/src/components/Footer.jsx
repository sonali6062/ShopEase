import React from 'react';
import { Link } from 'react-router-dom';

// Define the content for the footer
const title = "About Our Store";
const desc = "Welcome to HeritageMart - your ultimate destination for online shopping. Explore a wide range of products and enjoy hassle-free shopping with us.";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

// Define sample address and social media list
const addressList = [
    { iconName: 'icofont-google-map', text: 'New York, USA.' },
    { iconName: 'icofont-phone', text: '+880 123 456 789' },
    { iconName: 'icofont-envelope', text: 'info@HeritageMart.com' }
];
const socialList = [

];


// Define sample item and quick link list
const ItemList = [
    { text: 'All Products', link: '/shop' },
    { text: 'Shop', link: '/shop' },
    { text: 'Blog', link: '/blog' },
    { text: 'About', link: '/about' },
    { text: 'Policy', link: '#' },
    { text: 'FAQs', link: '/about' }
];

const quickList = [
    { text: 'Summer Sessions', link: '#' },
    { text: 'Events', link: '#' },
    { text: 'Gallery', link: '#' },
    { text: 'Forums', link: '#' },
    { text: 'Privacy Policy', link: '#' },
    { text: 'Terms of Use', link: '#' }
];

// Define sample tweet list with added text
const tweetList = [
    { iconName: 'icofont-twitter', text: 'Stay updated with the latest trends! Follow us on Twitter @HeritageMart.' },
    { iconName: 'icofont-twitter', text: 'Join the conversation! Tag us @HeritageMart and share your shopping experience.' }
];

// Define sample footer bottom links
const footerbottomList = [
    { text: 'Contact Us', link: '/contact' },
    { text: 'Shipping Information', link: '#' },
    { text: 'Returns & Exchanges', link: '#' },
    { text: 'Privacy Policy', link: '#' }
];

// Footer component
function Footer() {
    return (
        <footer className='style-2'>
            <div className='footer-top dark-view padding-tb'>
                <div className='container'>
                    <div className='row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center'>
                        <FooterItem title={title} content={desc} itemList={socialList} />
                        <FooterItem title={quickTitle} itemList={quickList} />
                        <FooterItem title={ItemTitle} itemList={ItemList} />
                        <FooterItem title={tweetTitle} itemList={tweetList} />
                    </div>
                </div>
            </div>

            <div className='footer-buttom'>
                <div className='container'>
                    <div className='section-wrapper d-flex justify-content-between align-items-center'>
                        <div className='footer-text'>
                            <p>&copy; 2023<Link to='/'>HeritageMart</Link> Designed by <a href='/' target='_blank'></a></p>
                        </div>
                        <div className='footer-buttom-list'>
                            {footerbottomList.map((val, i) => (
                                <Link key={i} to={val.link}>{val.text}</Link> 
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// FooterItem component
function FooterItem({ title, content, itemList }) {
    return (
        <div className='col'>
            <div className='footer-item our-address'>
                <div className='footer-inner'>
                    <div className='footer-content'>
                        <div className='title'>
                            <h4>{title}</h4>
                        </div>
                        <div className='content'>
                            {content && <p>{content}</p>}
                            <ul className='lab-ul office-icons'>
                                {itemList.map((val, i) => (
                                    <li key={i}>
                                        <Link to={val.link} className={val.className}>
                                            {val.iconName && <i className={val.iconName}></i>}
                                            {val.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
