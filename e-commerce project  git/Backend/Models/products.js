import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: String,
    category: String,
    seller: String,
    price: Number,
    stock: Number,
    ratings: Number,
    ratingscount: Number,
    img: String,
    im: String,
    shipping: Number,
    quantity: Number,
});

const Product = mongoose.model("product", productSchema);

export default Product;
