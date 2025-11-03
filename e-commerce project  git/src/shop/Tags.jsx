import React from 'react';

const title = 'Most Popular Tags';

const tagsList = [
    { link: "#", text: "Art" },
    { link: "#", text: "Sellar" },
    { link: "#", text: "Books" },
    { link: "#", text: "Jwellary" },
    { link: "#", text: "Feedback" },
    { link: "#", text: "Critics" },
    { link: "#", text: "Rituals" },
 
];

const Tags = () => {
    return (
        <div className='widget widget-tags'>
            <div className='widget-header'>
                <h5 className='title'>{title}</h5>
            </div>
            <ul className='widget-wrapper'>
                {tagsList.map((tag, i) => (
                    <li key={i}>
                        <a href={tag.link} className='tag-link'>{tag.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tags;
