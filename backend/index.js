const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database Connection with MongoDB
mongoose.connect("mongodb+srv://Devi:devi@cluster0.uuosljn.mongodb.net/virtualartgallery");

// API creation
app.get("/",(req,res)=>{
   res.send("Express App is Running")
})

//Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
          return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage:storage})

//Creating upload endpoint to upload image
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})




// Schema for creating products
const Products = mongoose.model("Product",{
    id:{
        type: Number,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    authorname:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
})
app.post('/addproduct',async(req,res)=>{
   let products = await Products.find({});
   let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
        
    }
    else{
        id=1;
    }
  const product = new Products({
    id:id,
    authorname:req.body.authorname,
    image:req.body.image,
    category:req.body.category,
    price:req.body.price,
    description:req.body.description,
    title:req.body.title,
  })
  console.log(product);
  await product.save();
  console.log("Saved");
   res.json({
    success:true,
    authorname:req.body.authorname,
  })
})

//Creating API for deleting arts
app.post('/removeproduct', async(req,res)=>{
    await Products.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        authorname:req.body.authorname
    })
})

// Creating API for getting all products
app.get('/allproducts',async(req,res)=>{
    let products = await Products.find({});
    console.log("All Products Fetched");
    res.send(products);
})

// Schema creating for user model
const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,    
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

// Creating endpoint for registering the user
app.post('/signup',async(req,res)=>{
    let check= await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"existing user found with same email address"})
    }
    //creating empty cart
    let cart = {};
    for(let i=0; i< 300; i++){
         cart[i]=0;
    }
    //creating user through the cart
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    // created user is saved in this dot method
    await user.save();
    //creating token for the user
    const data={
        user:{
            id:user.id
        }
    }

    //to generate token
    const token = jwt.sign(data,'secret_ecom');
    res.status(200).json({ success: true });

})
// creating end point for user login
app.post('/login',async(req,res)=>{
    //storing user detail
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data={
                user:{
                    id:user.id
                }
            }
            // using jwt to create token
           const token = jwt.sign(data,'secret_ecom');
           res.json({success:true,token});
        }
        else{
            res.json({success:false,error:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email Id"});
    }
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on Port "+port)
    }
    else{
        console.log("Error : "+error)
    }
})
