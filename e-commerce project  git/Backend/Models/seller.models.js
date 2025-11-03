import mongoose from 'mongoose';

const sellerSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    ifsc: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    fatherName: {
        type: String, 
        required: true
      },
      panNumber: {
        type: String, 
        required: true
      }
});

const Seller = mongoose.model('Seller', sellerSchema);

export default Seller;
