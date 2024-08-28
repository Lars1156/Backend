const userService = require('../services/userServices');

// Register a new user
exports. registerUser = async (req, res) => {
    try {
        const token = await userService.registerUser(req.body);
        return res.status(201).json({ token });
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
  };
//   Login User 
  exports. loginUser = async (req, res) => {
    try {
        const token = await userService.loginUser(req.body);
        return res.status(200).json({ token });
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
  };
  
 