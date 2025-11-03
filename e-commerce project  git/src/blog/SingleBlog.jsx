import React, { useState, useEffect } from 'react';
import blogList from '../utilis/blogdata';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PopularPost from '../shop/PopularPost'
import Tags from '../shop/Tags';

const socialList = [
    { iconName: 'icofont-facebook', siteLink: '#', className: 'facebook' },
    { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter' },
    { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin' },
    { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram' },
    { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest' }
];

const SingleBlog = () => {
    const [blog, setBlog] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // Filter the blog from blogList based on the id parameter
        const selectedBlog = blogList.find(item => item.id === Number(id));
        setBlog(selectedBlog);
    }, [id]);

    return (
        <>
            <PageHeader title={'Single Blog Page'} curPage={'Blog / Blog Details'} />
            <div className='blog-section blog-single padding-tb section-bg'>
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className='section-wrapper'>
                                    {blog && (
                                        <div className='post-item style-2'>
                                            <div className='post-inner'>
                                                <div className='post-thumb'>
                                                    <img src={blog.imgUrl} alt={blog.title} className='w-100' />
                                                </div>
                                                <div className='post-content'>
                                                    <h2>{blog.title}</h2>
                                                    <div className='meta-post'>
                                                        <ul className='lab-ul'>
                                                            {blog.metaList.map((val, i) => (
                                                                <li key={i}>
                                                                    <i className={val.iconName}></i>{' '}
                                                                    {val.text}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <p>Heritage shopping offers a sensory experience that online shopping cannot replicate, allowing customers to touch, feel, and interact with products before making a purchase decision. It fosters a sense of community as shoppers engage with local artisans and fellow shoppers in bustling markets or quaint boutiques. Additionally, traditional shopping provides the opportunity to discover unique, one-of-a-kind items that carry cultural significance and heritage, creating memorable and authentic shopping experiences.</p>
                                                    <blockquote>
                                                        <p>Traditional shopping isn't just about purchasing goods; it's about connecting with the rich tapestry of culture and heritage woven into every thread of the marketplace</p>
                                                        <cite>
                                                            <a href='#'>...BY muskan</a>
                                                        </cite>
                                                    </blockquote>
                                                    <p>Amidst the hustle and bustle of traditional markets, each purchase becomes a meaningful exchange, bridging the gap between producer and consumer, and celebrating the human connection that commerce was built upon</p>
                                                    <img src='https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/10/Madhubani-Painting-1.jpeg?fit=1200%2C880&ssl=1' alt='' />
                                                    <p>In a world of mass production, traditional shopping is a sanctuary for those who seek the authenticity of craftsmanship and the soulful stories behind each handmade item.</p>
                                                    <div className='video-thumb'>
                                                        <img src='/src/assets/images/blog/single/02.jpg' alt='' />
                                                        <a href='' className='video-button popup' target='_blank' >
                                                          
                                                            <i className='icofont-ui-play'></i>
                                                        </a>
                                                        <p>There's a certain magic in traditional shopping—the joy of stumbling upon hidden gems, the thrill of bargaining with local vendors, and the satisfaction of bringing home a piece of history with every purchase.</p>
                                                    </div>
                                                    <div className='tags-section'>
                                                        <ul className='tags lab-ul'>
                                                            <li><a href='#'>Agency</a></li>
                                                            <li><a href='#'>Bussines</a></li>
                                                            <li><a href='#'>Personal</a></li>
                                                        </ul>
                                                        <ul className='lab-ul social-icons'>
                                                            {socialList.map((val, i) => (
                                                                <li key={i}>
                                                                    <a href={val.siteLink} className={val.className}>
                                                                        <i className={val.iconName}></i>
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                   
                                                    <p>{blog.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                            </article>
                            <div className='navigation-part'>
                                                        <div className='left'>
                                                            <a href='#' className='prev'>
                                                                <i className='icofont-double-left'></i>Previous Blog 
                                                            </a>
                                                            <a href='#' className='title'>Previous Blog Title</a>
                                                        </div>
                                                        <div className='right'>
                                                            <a href='#' className='prev'>
                                                                <i className='icofont-double-right'></i>Next Blog 
                                                            </a>
                                                            <a href='#' className='title'>Next Blog Title</a>
                                                        </div>
                                                    </div>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <aside>
                                <Tags />
                                <PopularPost />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleBlog;
