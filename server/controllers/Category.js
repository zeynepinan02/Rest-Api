const { error } = require('console')
const Category = require('../models/Category.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const addCategory = async(req,res)=>{
    try{
        const {name} = req.body
        const category =  await Category.findOne({name})

        if(category){
            return res.status(500).json({message:"zaten var"})
        }

        const newCategory = await Category.create({name})
        const userToken =  jwt.sign({id:newCategory.id},process.env.SECRET_TOKEN,{expiresIn:'1h'});
    
        res.status(201).json({
            status:"OK",
            newCategory,
            
        })
    }catch(eror){
        return res.status(500).json({message:error.message})
    }
}


const listCategory = async(req,res)=>{
    try{
        const {name} = req.body
        const categories =  await Category.find()

        
        res.status(201).json({
            categories,
        })
    }catch(eror){
        return res.status(500).json({message:error.message})
    }
}

const deleteCategory = async(req,res)=>{
  
        const {name} = req.body
        const result = await Category.deleteOne({name});
        
        if(result.deletedCount === 1){
            return res.status(500).json({message:"silindi"})
        }

        else{
            return res.status(500).json({message:"bulunamadı"})
        }
}

const updateCategory = async(req,res)=>{
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

module.exports={addCategory,listCategory,deleteCategory,updateCategory}