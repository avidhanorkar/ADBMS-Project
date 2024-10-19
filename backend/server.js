import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
dotenv.config();

const app = express();
const port = 5000;

app.use(express.json());


app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({}) ; // find all products
    res.status(200).json({success: true, data : products})
  } catch (error) {
    console.log("error in fetching products", error.message);
    res.status(500).json({success: false, message: "Server Errors"});
    
  }
})

app.post("/api/products", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all feilds" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error Creating Product : ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const {id} = req.params ;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({ success: false, message: "Invalid Product Id"});
  }
  
  try {
    await Product.findByIdAndDelete(id) ;
    res.status(200).json({ success: true, message: "Product deleted successfully"});
  } catch (error) {
    console.log("Error deleting Product : ", error.message);
    res.status(404).json({ success: false, message: "Product not found"});
  }
  
})

app.put("/api/products/:id", async (req, res) => {
  const {id} = req.params ;
  const product = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({ success: false, message: "Product not found"});
  }
  try {
    const updateProduct = await Product.findByIdAndUpdate(id,product,{new:true});
    res.status(200).json({ success: true, data : updateProduct, message: "Product updated successfully"});
  } catch (error) {
    console.log("Error deleting Product : ", error.message);
    res.status(500).json({ success: false, message: "Server Error"});
  }
  
})

console.log(process.env.MONGO_URI);


app.listen(port, () => {
  connectDB();
  console.log(`Server started at ${port}`);
});
