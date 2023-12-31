import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams, useNavigate} from "react-router-dom";
    
const Edit = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [NameError, setNameError] = useState("");
    
    const handleName = (e) => {
        setName(e.target.value);
        if (e.target.value.length === 0) {
            setNameError(" ");
        } 
        else if(e.target.value.length < 3) {
            setNameError("Name must be at least 3 characters");
        }
        // else if(e.target.value === ) {
        //     setNameError("Name can't be the same");
        // }
        else {
            
            setNameError("");
        }
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name);
            })
    }, []);
    

    const editAuthor = e => {
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
            <h3>Edit this author:</h3>
            {
                    errors ?
                    <p style={{color: 'red'}}>{ errors }</p> : 
                    <p></p>
                    }
            <p style={{display: 'flex', justifyContent: 'center'}}>
                <label>Name: </label><br/>
                <input className='bigger' type="text" onChange={handleName} value={name}/>
            </p>
            <Link style={{marginRight: '20px'}} to={'/authors'}>Cancel</Link>
            <input className='bigger' type="submit"/>
        </form>
        
    )
}
    
export default Edit;

