import React, { useEffect, useState } from 'react'
import './Listproduct.css'
import cross_icon1 from '../../assets/cross_icon1.png'
const Listproduct = () => {
 const [allproducts,setAllProducts] = useState([]);
  const fetchInfo = async()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }
  useEffect(()=>{
    fetchInfo();
  },[])
const remove_product = async(id)=>{
  await fetch('http://localhost:4000/removeproduct',{
    method:'POST',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json',
    },
    body:JSON.stringify({id:id})
  })
    await fetchInfo();
}

  return (
    <div className='list-product'>
      <h1>All Artproduct List</h1>
      <div className="listproduct-format-main">
        <p>Arts</p>
        <p>Author Name </p>
        <p>$Price</p>
        <p>Title</p>
        <p>Description</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product,index)=>{
          return <> <div key={index} className="listproduct-format-main listproduct-format">
            <img src={product.image} alt="" className="listproduct-product-icon" />
            <p>{product.authorname}</p>
            <p>${product.price}</p>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <img onClick={()=>{remove_product(product.id)}} className='listproduct-remove-icon' src={cross_icon1}/>
          </div>
          <hr/>
          </>
        })}
      </div>
    </div>
  )
}

export default Listproduct

