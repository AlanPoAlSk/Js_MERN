import axios from 'axios';
import { Link } from 'react-router-dom';
    
const ProductList = (props) => {
    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    

    return (
        <div>
            {props.products.map( (product, i) =>
                <div key={i} style={{display:'flex', alignItems: 'center', justifyContent:'space-between', border: '2px solid black' , marginBottom:'5px'}}>
                    <p style={{fontWeight:'bold'}}> {i+1}.  <Link to={"/products/"+ product._id}>{product.title}</Link></p>
                    <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                </div>
                
            )}
        </div>
    )
}
    
export default ProductList;

