import express from 'express'; 
import { getProducts,addOrUpdateProduct } from "../controller/product.controller.js"; 

const router = express.Router();

router.get("/", getProducts); 
router.post('/updateProduct', addOrUpdateProduct);
export default router; 
