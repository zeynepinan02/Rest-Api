const express = require('express');
const cors =require('cors');
const dotenv = require('dotenv')
const db = require('./config/database.js');
const Category= require('./routes/Category.js');
const Product = require('./routes/Product.js');


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'30mb',extended:true}))
app.use(express.urlencoded({limit:'30mb',extended:true}))


app.use('/',Category)
app.use('/',Product)


app.get('/', (req, res)=> {
    res.json({message: "deneme"})
})

const PORT = process.env.PORT || 5000;

db()

app.listen(PORT, () => {
    console.log("server is running on port : 5000");
})