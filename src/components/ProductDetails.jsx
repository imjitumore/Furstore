import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetails = () => {
    const{id}=useParams()
    const[product,setProduct]=useState()

    console.log(product)
    useEffect(() => {
        if (data.length > 0) {
          console.log(data);
          const findProduct = data.find((item) => item.id === parseInt(id));
          setProduct(findProduct);
        }
      }, [data, id]);

      if (!product) {
        return <p>Loading...</p>;
      }
  return (
    <>
     <div>
            <img src={product.image} alt="" />
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
        </div>
    </>
  )
}
