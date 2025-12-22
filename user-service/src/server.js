import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import { connectDB } from './config/db.js';
dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5002;

app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`user-service - http://localhost:${port}`);
})

