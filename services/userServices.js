const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secretKey = "Kishan@1156";

// Register New User 
exports.registerUser = async(userData)=>{
    const { username, email, password } = userData;

    let user = await User.findOne({ email });
    if (user) throw new Error('User already exists');

    user = new User({ username, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1d' });

    return token;
};
// Login user
exports.loginUser = async (email, password) => {
    
    let user = await User.findOne({ email });
    if (!user) throw new Error('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1d' });

    return token;
  };