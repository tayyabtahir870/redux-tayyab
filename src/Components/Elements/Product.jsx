import React, { useState, useEffect } from 'react'

function Product() {
    const [product,setProduct]=useState([]);

    useEffect(()=>{
        const fetchproduct= async()=>{
                 const res =await fetch('https://fakestoreapi.com/products' )
                 const data =await res.json();
                 console.log(data);
                 setProduct(data);
        }
        fetchproduct();
    },[]);
  return (
    <div className=' productsWrapper'>
        {product.map(product=>(
            <div className='card' key={product.id }>
                <img src={product.image} alt=""  />
                <h4>{product.title}</h4>
                <h4>{product.price}</h4>
                <button className='btn'>Add to Cart</button>
            </div>
        ))}
           
    </div>
  )
}

export default Product