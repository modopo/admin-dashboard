import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      picturePath,
      city,
      state,
      country,
      occupation,
      phoneNumber,
    } = req.body;
    
    const salt = await.bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: passwordHash,
      picturePath,
      city,
      state,
      country,
      occupation,
      phoneNumber,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
