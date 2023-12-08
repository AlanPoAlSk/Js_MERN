import React from 'react'
import axios from 'axios';
    
const ProductList = (props) => {
    

    return (
        <div>
            {props.products.map( (product, i) =>
                // <p style={{fontWeight:'bold'}} key={i}> {i+1}. {product.title} - - ${product.price} - - "{product.description}"</p>
                <p style={{fontWeight:'bold'}} key={i}> {i+1}.  <a href={"/products/"+ product._id}>{product.title}</a></p>
            )}
        </div>
    )
}
    
export default ProductList;

