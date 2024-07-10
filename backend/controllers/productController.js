import Product from "../models/Product.js";

export async function getProducts(req, res) {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

export async function addProduct(req, res) {
    const { name, description, price, category, title, desc, img, categories, size, color } = req.body;
    
    try {
        const newProduct = new Product({
            name,
            description,
            price,
            category,
            title,
            desc,
            img,
            categories,
            size,
            color
        });

        const product = await newProduct.save();
        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}