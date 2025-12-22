import User from "../models/user.model.js";


const createUser = async(req, res) => {
    try {
      const { authId, email, name } = req.body;
      const data = await User.create({ authId, email, name });
      res.status(200).json({ message: "User Registered Successfully" }, data); 
    } catch (error) {
      console.log('Error on updating user...')   
      res.status(500).json({ message: "Internal Server Error" });
    }
}

const getUser = async(req, res) => {
    try {
        const { authId } = req.params;
        const user = await User.findOne({ authId });
        const data = {
            name: user.name,
            email: user.email
        }
        res.status(200).json({ message: 'User get successfull', data })
    } catch (error) {
        console.log('Error on getting user...');
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateUser = async(req, res) => {
    try {
       const { authId } = req.params;
       const { name } = req.body;

       const updatedData = await User.findOneAndUpdate({ authId: authId }, { $set: { name } }, { new: true });
       if(!updatedData) {
        res.status(404).json({ message: 'User not found' });
        return;
       }
       res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
       console.log('Error on updating user...');
       res.status(500).json({ message: "Internal Server Error" }); 
    }
}

export default {
    getUser,
    updateUser,
    createUser
}