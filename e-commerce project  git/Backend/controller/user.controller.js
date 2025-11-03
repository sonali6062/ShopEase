import User from "../Models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// Signup function
export const signup = async (req, res) => {
    try {
        const { fullname, email, password, confirmpassword } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            fullname,
            email,
            password: hashedPassword, // Save the hashed password
            confirmpassword
        });

        // Save the user to the database
        await newUser.save();

        // Respond with success message
        return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.log("Error:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Login function
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Check if the password is correct
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, 'mkfvsjbjmhbwmhncsnbmvbsm', { expiresIn: '1h' });

        // Respond with success message, token, and user details
        return res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });
    } catch (error) {
        console.log("Error:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};
