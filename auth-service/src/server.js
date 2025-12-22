import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5001;

app.use('/', authRoutes);

app.listen(port, () => {
    console.log(`auth-service - http://localhost: ${port}`);
})