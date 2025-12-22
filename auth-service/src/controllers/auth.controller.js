import Auth from "../models/auth.model.js";
import { comparePassword, hashPassword } from "../utils/hash.js";

const register = async (req, res) => {
    try {
     const { name, email, password} = req.body;
     const alreadyExist = await Auth.findOne({ email });
     if(alreadyExist) {
        res.status(403).json({ message: 'User already exists'});
        return;
     }
     const hashedPassword = await hashPassword(password);
     const authUser = await Auth.create({ email, password: hashedPassword });

      const data = {
      name: name,
      email: authUser.email,
      authId: authUser._id
    };
    
     res.status(200).json({ message: 'completed auth registration', data});
    } catch (error) {
        console.log('Error on registering user...');
        res.status(500).json({ message: 'Internal server error' });
    }
}

const login = async (req, res) => {
    try {
     const { email, password } = req.body;
     const authUser = await Auth.findOne({ email });
     if(!authUser) {
        res.status(403).json({ message: 'Email is not valid' });
        return;
     }
     const verifiedPassword = await comparePassword(password, authUser.password);
     if(!verifiedPassword) {
        res.status(403).json({ message: 'Password do not match' });
        return;
     }
     res.status(200).json({ message: 'Login successfully' , authId: authUser._id });
    } catch (error) {
       console.log('Error on loggingin user...');
       res.status(500).json({ message: 'Internal server error' });
    }
}

export default {
    register,
    login
}