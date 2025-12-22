import Product from "../models/product.model.js";


const getProducts = async(req, res) => {
    try {
      const { authId } = req.params;
      const products = await Product.find({ authId });
      res.status(200).json({ message: 'product get successfully', products });  
    } catch (error) {
      console.log('Error on getting products...');
      res.status(500).json({ message: 'Internal server error' });   
    }
}

const createProduct = async(req, res) => {
    try {
        const {  ProductName, ProductPrice, ProductLink } = req.body;
        const { authId } = req.params;
        await Product.create({ authId, ProductName, ProductPrice, ProductLink });
        res.status(200).json({ message: 'Product created successfully' });
    } catch (error) {
        console.log('Error on creating products...') 
        res.status(500).json({ message: 'Internal server error' }); 
    }
}

const updateProduct = async(req, res) => {
    try {
        const {  ProductName, ProductPrice, ProductLink } = req.body;
        const { productId } = req.params;
        const result = await Product.findByIdAndUpdate({ _id: productId }, { ProductName, ProductPrice, ProductLink });
        res.status(200).json({ message: 'product updated successfully'})
    } catch (error) {
        console.log('Error on updating products...');
        res.status(500).json({ message: 'Internal server error' });  
    }
}

const deleteProduct = async(req, res) => {
    try {
        const { productId } = req.params;
        await Product.findByIdAndDelete({ _id: productId });
        res.status(200).json({ message: 'product deleted successfully'})
    } catch (error) {
        console.log('Error on deleting products...');
        res.status(500).json({ message: 'Internal server error' });   
    }
}



export default {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}