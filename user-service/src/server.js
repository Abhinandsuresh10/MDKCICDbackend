import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import { connectDB } from './config/db.js';
dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5002;

app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`user-service running on port ${PORT}`);
})

