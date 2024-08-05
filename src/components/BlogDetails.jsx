import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
export const BlogDetails = ({data}) => {
    const{ name } =useParams()
    const [product, setProduct] = useState();

    console.log(product)
    useEffect(() => {
        if (data.length > 0) {
          console.log(data);
          const findProduct = data.find((item) => item.name === name);
          setProduct(findProduct);
        }
      }, [data, name]);

      if (!product) {
        return <p>Loading...</p>;
      }
  return (
    <>
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt="" />
        </div>
    </>
  )
}