import express from 'express';
import dotenv from 'dotenv';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const port = process.env.PORT || 5000

app.use(cors({
        origin: process.env.CORS_ORIGIN || '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        credentials: true,
}));


app.use(
  '/auth',
  createProxyMiddleware({
    target: process.env.AUTH_SERVICE_URL,  
    changeOrigin: true,
    pathRewrite: {
      '^/auth': '',
    },
  })
);

app.use(
  '/users',
  createProxyMiddleware({
    target: process.env.USER_SERVICE_URL,   
    changeOrigin: true,
    pathRewrite: {
      '^/users': '',
    },
  })
);

app.use(
  '/products',
  createProxyMiddleware({
    target: process.env.PRODUCT_SERVICE_URL,   
    changeOrigin: true,
    pathRewrite: {
      '^/products': '',
    },
  })
);

app.listen(port, () => {
    console.log(`gateway running on port ${port}`);    
});