import React from 'react';
import { Link } from 'react-router-dom';

const title = 'Most Popular Post';

const postList = [
 
];

const PopularPost = () => {
    return (
        <div className='widget widget-post'>
            <div className='widget-header'>
                <h5 className='title'>{title}</h5>
            </div>
            <ul className='widget-wrapper'>
                {postList.map((blog, i) => (
                    <li key={i} className='d-flex flex-wrap justify-content-between'>
                        <div className='post-item'>
                            <div className='post-thumb'>
                                <Link to={`/blog/${blog.id}`}>
                                    <img src={blog.imgUrl} alt={blog.imgAlt} />
                                </Link>
                            </div>
                            <div className='post-details'>
                                <h5>
                                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                                </h5>
                                <p>{blog.date}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PopularPost;
