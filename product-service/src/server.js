import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';


dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', productRoutes);

const port = process.env.PORT || 5003

app.listen(port, () => {
    console.log(`product-service - http://localhost:${port}`); 
})