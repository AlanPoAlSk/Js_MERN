import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams, useNavigate} from "react-router-dom";
    
const Edit = (props) => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name);
            })
    }, []);
    
    const editAuthor = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/authors/' + id, {
            name
        })
            .then(res => {console.log(res)
                navigate(-1)
            })
            .catch(err=> {
                const errorResponse = err.response.data.errors;
                const errorsArr = [];
                for(const key of Object.keys(errorResponse)){
                    errorsArr.push(errorResponse[key].message)
                }
                setErrors(errorsArr);
                console.log(err);
            
        })
    }


    
    return (
        
        <form onSubmit={editAuthor}>
            <h2>Favorite authors</h2>
            <Link to={'/authors'}>Home</Link>
            <p>Edit this author:</p>
            <p style={{display: 'flex', justifyContent: 'center'}}>
                <label>Name: </label><br/>
                <input className='bigger' type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <Link style={{marginRight: '20px'}} to={'/authors'}>Cancel</Link>
            <input className='bigger' type="submit"/>
        </form>
        
    )
}
    
export default Edit;

