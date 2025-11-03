import { useEffect, useState } from "react";
import PageHeader from '../components/PageHeader';
import { Link } from "react-router-dom";
import delImgUrl from '../assets/images/shop/del.png';
import CheckOutPage from "./CheckOutPage";
import { Button } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';
const CartPage = () => {
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        // Fetch cart item from local Storage
        const storedCartItem = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItem(storedCartItem);
    }, []);
    const checkout = async () => {
        

        try {
            const response = await fetch('http://localhost:8002/checkout', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    items: cartItem,
                    
                }),
            });

            const data = await response.json();

            // Redirect to Stripe checkout page
            const result = await stripe.redirectToCheckout({
                sessionId: data.sessionId
            });

            if (result.error) {
                console.error('Error redirecting to checkout:', result.error);
                // Handle error
            }
        } catch (error) {
            console.error('Error during checkout:', error);
            // Handle error
        }
    };
    
    
    
    // Calculate prices
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }

    // Handle quantity increase
    const handleIncrease = (item) => {
        item.quantity += 1;
        setCartItem([...cartItem]);

        // Update local storage with new cart items
        localStorage.setItem('cart', JSON.stringify(cartItem));
    }

    // Handle quantity decrease
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCartItem([...cartItem]);
        }

        // Update local storage with new cart items
        localStorage.setItem('cart', JSON.stringify(cartItem));
    }

    // Handle item remove means delete
    const handleRemoveItem = (item) => {
        const updateCart = cartItem.filter((cartItem) => cartItem.id !== item.id);

        setCartItem(updateCart);
        updateLocalStorage(updateCart);
    }

    const updateLocalStorage = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Cart subtotal
    const cartSubtotal = cartItem.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0);

    // Order total
    const orderTotal = cartSubtotal;

    return (
        <>
            <PageHeader title={'Shop Cart'} curPage={'Cart Page'} />
            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        {/* Cart top */}
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="cat-product">Product</th>
                                        <th className="cat-price">Price</th>
                                        <th className="cat-quantity">Quantity</th>
                                        <th className="cat-toprice">Total</th>
                                        <th className="cat-edit">Edit</th>
                                    </tr>
                                </thead>
                                {/* Table body */}
                                <tbody>
                                    {
                                        cartItem.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="product-item cat-product">
                                                        <div className="p-thumb">
                                                            <Link to='/shop'><img src={item.img} alt={item.name} /></Link>
                                                        </div>
                                                        <div className="p-content">
                                                            <Link to='/shop'>{item.name}</Link>
                                                        </div>
                                                    </td>
                                                    {/* Add other table cells here */}
                                                    <td className="cat-price">₹{item.price}</td>
                                                    <td className="cat-quantity">
                                                        <div className="cart-plus-minus">
                                                            <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                                                            <input type="text" className="cart-plus-minus-box" name="qtybutton" value={item.quantity}></input>
                                                            <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>
                                                        </div>
                                                    </td>
                                                    <td className="cat-toprice">₹{calculateTotalPrice(item)}</td>
                                                    <td className="cat-edit">
                                                        <button onClick={() => handleRemoveItem(item)}>
                                                            <img src={delImgUrl} alt="Delete" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        {/* Cart top end */}

                        {/* Cart buttons */}
                        <div className="cart-bottom">
                            {/* Checkout box */}
                            <div className="cart-checkout-box">
                                <form className="coupon">
                                    <input className="cart-page-input-text" type="text" name="coupon" id="coupon" placeholder="Coupon code.." />
                                    <input type="submit" value='Apply Coupon' />
                                </form>

                                <form className="cart-checkout">
                                    <input type="submit" value='Update Cart' />
                                    {/* Placeholder for checkout button */}
                                    <div className='modalCard'>
                                        <Button variant='primary' className='py-2' onClick={checkout}>Proceed to Payment</Button>
                                    </div>
                                </form>
                            </div>
                            {/* Checkout box end */}

                            {/* Shipping box */}
                            <div className="shiping-box">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="calculate-shiping">
                                            <h3>Calculate shipping</h3>
                                            <div className="outline-select">
                                                {/* Select for country */}
                                                <select>
                                                    <option value="">Select Country</option>
                                                    <option value="usa">United States</option>
                                                    <option value="canada">Canada</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="India">India</option>
                                                </select>
                                                <span className="select-icon">
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="outline-select shipping-select ">
                                            {/* Select for city */}
                                            <select>
                                                <option value="">Select City</option>
                                                <option value="London">London</option>
                                                <option value="Newyork">New York</option>
                                                <option value="Sydney">Motihari</option>
                                                <option value="Sydney">Delhi</option>
                                                <option value="Sydney">Kolkatta</option>
                                                <option value="Sydney">Patna</option>
                                                <option value="Sydney">Bhagalpur</option>
                                                <option value="Sydney">Banglore</option>
                                                <option value="Sydney">Goa</option>

                                            </select>
                                            {/* <span className="select-icon">
                                                <i className="icofont-rounded-down"></i>
                                            </span> */}
                                        </div>
                                        <input type="text" name="postalcode" id="postalcode" placeholder="postcode/ZIP*" className="cart-page-input-text"></input>
                                        <button type="submit" >Update Adress </button>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        {/* Right side content */}
                                        <div className="cart-overview">
                                            <h3>Cart Total</h3>
                                            <ul className="lab-ul">
                                                <li>
                                                    <span className="pull-left">Cart subtotal</span>
                                                    <p className="pull-right">₹{cartSubtotal}</p>
                                                </li>
                                                <li>
                                                    <span className="pull-left">shiping and Handling</span>
                                                    <p className="pull-right">Free shiping</p>
                                                </li>
                                                <li>
                                                    <span className="pull-left">Order Total</span>
                                                    <p className="pull-right">₹{orderTotal.toFixed(2)}</p>
                                                </li>
                                            </ul>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            {/* Shipping box end */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartPage;
