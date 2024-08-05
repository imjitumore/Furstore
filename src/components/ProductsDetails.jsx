import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ProductsDetails = ({ data }) => {
  const { name } = useParams();
  const [product, setProduct] = useState(null);

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
    <div className="container">
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
};

