import React, { useState } from 'react'
import './Addproduct.css'
import uploadicon from '../../assets/uploadicon.png'

const Addproduct = () => {
    const [image,setImage] = useState(false);
    const[productDetails,setProductDetails] = useState({
        title:"",
        image:"",
        category:"painting",
        authorname:"",
        description:"",
        price:""
    })
    const imageHandler = (e) =>{
       setImage(e.target.files[0]);
    }
    const changeHandler = (e) =>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const Add_Product= async()=>{
        console.log(productDetails);
        let responseData;
        let product= productDetails;

        let formData = new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp)=>resp.json()).then((data)=>{responseData=data})
        if(responseData.success){
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'content-Type':'application/json',
                },
               body:JSON.stringify(product),
            }).then((resp)=>resp.json).then((data)=>{
                data.success?alert("Art Added"):alert("Failed")
            })
        }
    }
  return (
    <div className='add-product'>
       <div className="addproduct-itemfield">
       <p>Art title</p>
       <input value={productDetails.title} onChange={changeHandler} type="text" name="title" placeholder="Type here" />
    </div>
    <div className="addproduct-authorname">
     <div className="addproduct-itemfield">
        <p>Author Name</p> 
    <input value={productDetails.authorname} onChange={changeHandler} type="text" name="authorname" placeholder="Type here" />
    </div>
    <div className="addproduct-itemfield">
        <p>Description</p>
    <input value={productDetails.description} onChange={changeHandler} type="text" name="description" placeholder="Type here" /> 
    </div>
    </div>
    <div className="addproduct-price">
      <div className="addproduct-itemfield">
         <p>Price</p>
         <input value={productDetails.price} onChange={changeHandler} type="text" name="price" placeholder="Type here"/>
      </div>
    </div>
    <div className="addproduct-itemfield">
        <p>Art Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
            <option value="3dart">3DArt</option>
            <option value="painting">Painting</option>
            <option value="mordernportrait">Mordern Portrait</option>
            <option value="museum">Museum</option>
            <option value="wonder">Wonders</option>
            <option value="digitalarts">Digital Arts</option>
        </select>
    </div>
    <div className="addproduct-itemfield">
        <label htmlFor='file-input'>
          <img src={image?URL.createObjectURL(image):uploadicon} className='addproduct-thumnail-img' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
    </div>
    <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default Addproduct
