import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <h1>{product.title}</h1>
            <p style={{fontSize: 'larger'}}>Price: <span style={{fontWeight: ' bolder', fontStyle: 'italic'}}>${product.price}</span></p>
            <p style={{fontSize: 'larger'}}>Description: <span style={{fontWeight: ' bolder', fontStyle: 'italic'}}>" {product.description} "</span></p>
            <Link to={"/products"}>back</Link>
        </div>
    )
}
    
export default Detail;