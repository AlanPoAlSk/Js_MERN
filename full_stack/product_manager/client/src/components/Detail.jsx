import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";


    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
                navigate(-1)
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>{product.title}</h1>
            <p style={{fontSize: 'larger'}}>Price: <span style={{fontWeight: ' bolder', fontStyle: 'italic'}}>${product.price}</span></p>
            <p style={{fontSize: 'larger'}}>Description: <span style={{fontWeight: ' bolder', fontStyle: 'italic'}}>" {product.description} "</span></p>
            <hr style={{marginRight:'20px'}}/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}> 
            <p><Link to={"/products"}>back</Link></p>
            <p><Link to={"/products/" + product._id + "/edit"}>edit</Link></p>
            <p><button onClick={(e)=>{deleteProduct(product._id)}}>delete</button></p>
            </div> 
        </div>
    )
}
    
export default Detail;