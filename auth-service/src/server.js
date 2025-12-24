import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5001;

app.use('/', authRoutes);

app.listen(PORT, () => {
    console.log(`auth-service running on port ${PORT}`);
})