import express from 'express';
import userController from '../controllers/user.controller.js';

const userRoutes = express.Router();

userRoutes.post('/createUser', userController.createUser)
userRoutes.get('/getUser/:authId', userController.getUser);
userRoutes.put('/updateUser/:authId', userController.updateUser);

export default userRoutes;