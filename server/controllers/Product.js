const { error } = require('console')
const Product = require('../models/Product.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const addProduct = async(req,res)=>{
    try{
        const {name,price,category} = req.body
        const product =  await Product.findOne({name})

        if(product){
            return res.status(500).json({message:"zaten var"})
        }

        const newProduct = await Product.create({name,price,category})
    
        res.status(201).json({
            status:"OK",
            newProduct,
            
        })
    }catch(eror){
        return res.status(500).json({message:error.message})
    }
}

const getProductByName = async(req,res)=>{
    try{
        const {name} = req.body
        const product =  await Product.find();

        if(product){
            res.status(201).json({
                //status:"OK",
                product,
                
            })
        }
        
    }catch(eror){
        return res.status(500).json({message:error.message})
    }
}

const deleteProductByName = async(req,res)=>{
    try{
        const {name} = req.body
        const result = await Product.deleteOne({name});
        
        if(result.deletedCount === 1){
            return res.status(500).json({message:"silindi"})
        }

        else{
            return res.status(500).json({message:"bulunamadı"})
        }
        
        
        
    }catch(eror){
        return res.status(500).json({message:error.message})
    }
}

const updateProduct = async(req,res)=>{
    try{
        const { name, newName } = req.body;
        const result = await Category.updateOne({ name: name }, { $set: { name: newName } });

        if (result.nModified === 1) {
            return res.status(200).json({ message: "Kategori başarıyla güncellendi" });
        } else {
            return res.status(404).json({ message: "Kategori bulunamadı veya güncellenemedi" });
        }
        
        
    }catch(eror){
        return res.status(500).json({message:error.message})
    }
}

module.exports={addProduct,getProductByName,deleteProductByName,updateProduct}
