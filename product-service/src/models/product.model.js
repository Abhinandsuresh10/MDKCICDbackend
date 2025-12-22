import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    authId: {
        type: String,
        required: true
    },
    ProductName: {
        type: String,
        required: true,
    },
    ProductPrice: {
        type: String,
        required: true
    },
    ProductLink: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;