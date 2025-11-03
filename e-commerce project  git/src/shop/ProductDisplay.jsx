import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const desc = 'Traditional painting encompasses a wide range of styles and genres, including portraits, landscapes, still life, and religious scenes. Artists employ techniques such as realism, impressionism, and surrealism to evoke emotions, tell stories, or capture the beauty of the natural world.';

const ProductDisplay = ({ item }) => {
    const { id, name, price, seller, ratingCount, img } = item;

    const [prequantity, setQuantity] = useState(1);
    const [coupon, setCoupon] = useState('');
    const [size, setSize] = useState('select size');
    const [color, setColor] = useState('select color');

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleDecrement = () => {
        if (prequantity > 1) {
            setQuantity(prequantity - 1);
        }
    };

    const handleIncrement = () => {
        setQuantity(prequantity + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: prequantity,
            size: size,
            color: color,
            coupon: coupon
        };

        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = existingCart.findIndex((item) => item.id === id);

        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += prequantity;
        } else {
            existingCart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(existingCart));

        setQuantity(1);
        setSize('select size');
        setColor('select color');
        setCoupon('');
    };

    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p className='rating'>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    {/* some error */}
                    <span>303{ratingCount}review</span>
                    <h4>₹{price}</h4>
                    <h6>{seller}</h6>
                    <p>{desc}</p>
                </p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='select-product size'>
                        <select value={size} onChange={handleSizeChange}>
                            <option>select size</option>
                            <option>XL</option>
                            <option>XLL</option>
                            <option>LG</option>
                            <option>SM</option>
                            <option>M</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>

                    <div className='select-product color'>
                        <select value={color} onChange={handleColorChange}>
                            <option>select color</option>
                            <option>Pink</option>
                            <option>Sky</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>White</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>

                    {/* cart plus minus */}
                    <div className='cart-plus-minus'>
                        <div className='dec qtybutton' onClick={handleDecrement}>-</div>
                        <input className='cart-plus-minus-box' type='text' name='qtybutton' value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
                        <div className='inc qtybutton' onClick={handleIncrement}>+</div>
                    </div>

                    <div className='discount-code mb-2'>
                        <input type='text' placeholder='Enter Discount Code' value={coupon} onChange={(e) => setCoupon(e.target.value)} />
                    </div>

                    {/* button section */}
                    <button type='submit' className='lab-btn'>
                        <span>Add to cart</span>
                    </button>
                    <Link to='/cart-page' type='submit' className='lab-btn bg-primary'>
                        <span>check out</span>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default ProductDisplay;
