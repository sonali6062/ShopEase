import RegisterUser from "../Models/register.user.model.js";

// Controller function to handle user registration
export const registerUser = async (req, res) => {
    try {
        const { name, email, qualification, interest, skill } = req.body;

        // Check if the user already exists
        const existingUser = await RegisterUser.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create a new user
        const newUser = new RegisterUser({
            name,
            email,
            qualification,
            interest,
            skill
        });

        // Respond with success message
        return res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.log("Error registering user:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};
