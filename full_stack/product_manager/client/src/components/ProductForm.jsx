import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update title, price and description
    return (
        <form onSubmit={onSubmitHandler}>
            <h2>Product Manager</h2>
            <p style={{display: 'flex', justifyContent: 'center'}}>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p style={{display: 'flex', justifyContent: 'center', marginRight: '5px'}}>
                <label>Price</label><br/>
                <input type="number" min="0.01" step="0.01" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p style={{display: 'flex', justifyContent: 'center', marginRight: '50px'}}>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default ProductForm;