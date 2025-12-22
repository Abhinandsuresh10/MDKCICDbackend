import express from 'express';
import dotenv from 'dotenv';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000

app.use(cors({
        origin: process.env.CORS_ORIGIN || '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        credentials: true,
}));

app.use(
  '/auth',
  createProxyMiddleware({
    target: 'http://localhost:5001',  
    changeOrigin: true,
    pathRewrite: {
      '^/auth': '',
    },
  })
);

app.use(
  '/users',
  createProxyMiddleware({
    target: 'http://localhost:5002',   
    changeOrigin: true,
    pathRewrite: {
      '^/users': '',
    },
  })
);

app.use(
  '/products',
  createProxyMiddleware({
    target: 'http://localhost:5003',   
    changeOrigin: true,
    pathRewrite: {
      '^/products': '',
    },
  })
);

app.listen(port, () => {
    console.log(`gateway - http://localhost:${port}`);
    
})