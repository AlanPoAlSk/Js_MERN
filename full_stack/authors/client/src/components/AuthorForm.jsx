import { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";


const AuthorForm = () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [NameError, setNameError] = useState(""); 
    //handler when the form is submitted
    const handleName = (e) => {
        setName(e.target.value);
        if (e.target.value.length === 0) {
            setNameError(" ");
        } 
        else if(e.target.value.length < 3) {
            setNameError("Name must be at least 3 characters");
        }
        else {
            
            setNameError("");
        }
    }
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/authors', {
            name
        })
            .then(res=> {
                console.log(res);
                setName('');
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
    
    //onChange to update title, price and description
    return (
        <form onSubmit={onSubmitHandler}>
            <h2>Favorite authors</h2>
            <Link to={'/authors'}>Home</Link>
            <h3>Add a new author:</h3>
            {
                    NameError ?
                    <p style={{color: 'red'}}>{ NameError }</p> : 
                    <p></p>
                    }
            <p style={{display: 'flex', justifyContent: 'center'}}>
                <label>Name: </label><br/>
                <input className='bigger' type="text" onChange={handleName} value={name}/>
            </p>
            <Link style={{marginRight: '20px'}} to={'/authors'}>Cancel</Link>
            <input type="submit"/>
        </form>
    )
}

export default AuthorForm;