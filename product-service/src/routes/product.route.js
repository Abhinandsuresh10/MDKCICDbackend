import express from 'express';
import productController from '../controllers/product.controller.js';

const productRoutes = express.Router();

productRoutes.get('/getProducts/:authId', productController.getProducts);
productRoutes.post('/createProduct/:authId', productController.createProduct);
productRoutes.put('/updateProduct/:productId', productController.updateProduct);
productRoutes.delete('/deleteProduct/:productId', productController.deleteProduct);

export default productRoutes;