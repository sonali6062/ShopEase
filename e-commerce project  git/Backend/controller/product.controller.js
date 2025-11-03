import Product from "../Models/products.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find(); 
        res.status(200).json(products);
    } catch (error) {
        console.log("error", error);
    }
}

export const addOrUpdateProduct = async (req, res) => {
    const newProduct = req.body;

    try {
        let product = await Product.findOne({ name: newProduct.name });

        if (product) {
            product = await Product.findByIdAndUpdate(product._id, newProduct, { new: true });
        } else {
            product = new Product(newProduct);
            await product.save();
        }
        res.status(200).json({ message: 'Product updated successfully', product });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Error updating product' });
    }
};