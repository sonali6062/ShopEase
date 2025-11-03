import mongoose from 'mongoose';

const registerUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    qualification: {
        type: String
    },
    interest: {
        type: String
    },
    skill: {
        type: String
    }
});

const RegisterUser = mongoose.model('RegisterUser', registerUserSchema);

export default RegisterUser;
