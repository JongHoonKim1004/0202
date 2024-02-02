import React, { useState } from 'react';
import data from '../db/product';
import Products from './Products';
import { useParams } from 'react-router-dom';


const Productlist = () => {
  
  const [product,setProd] = useState(data);
  let {id} = useParams();

  return (
    <div className='container'>
      <div className='row' style={{marginTop: "30px"}}>
        {product.map((ele,i) => (
          <Products product={product[i]} i={i} key={data[i].id}/>
        ))}
      </div>
    </div>
  );
};

export default Productlist;