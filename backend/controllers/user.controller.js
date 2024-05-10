// user.controller.js
import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    // Check if req.user is defined before accessing its properties
    const loggedInUserId = req.user ? req.user._id : null;
    // Optionally handle the case where loggedInUserId is null

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
