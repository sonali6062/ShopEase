import Seller from '../Models/seller.models.js';
import bcrypt from 'bcryptjs';

export const seller = async (req, res) => {
    try {
        const { fullname, email, password, confirmpassword, ifsc, accountNumber ,fatherName, panNumber} = req.body;

        // Validate request body fields
        if (!fullname || !email || !password || !confirmpassword || !ifsc || !accountNumber|| !fatherName || !panNumber) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if seller already exists
        const existingSeller = await Seller.findOne({ email });
        if (existingSeller) {
            return res.status(400).json({ message: 'Seller already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);


        res.status(201).json({ message: 'Seller registered successfully', seller: newSeller });
    } catch (error) {
        console.error('Error registering seller:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
