import { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";


const PlayerForm = () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState("");
    const [preferredPosition, setPreferredPosition] = useState("");
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
        axios.post('http://localhost:8000/api/players', {
            name,
            preferredPosition,
        })
            .then(res=> {
                console.log(res);
                setName('');
                setPreferredPosition('');
                navigate(-1)
            })
            .catch(err=> {
                const errorResponse = err.response.data.errors;
                const errorsArr = [];
                for(const key of Object.keys(errorResponse)){
                    errorsArr.push(errorResponse[key].message)
                }
                setErrors(errorsArr);
                console.log('sorry, something went wrong');
            
        })
            
            
    }
    
    //onChange to update title, price and description
    return (
        <div>
            <Link className='margR' to={'/players/list'}>Manage Players</Link>
            |
            <Link className='margL' to={'/status/game/1'}>Manage Player Status</Link>
            <hr />
            
            <Link className='margR' to={'/players/list'}>List</Link> 
            |
            <Link className='margL' style={{color:'darkslateblue'}}>Add Player</Link>
            <hr />
            {
                    errors ?
                    <p style={{color: 'red'}}>{ errors }</p> : 
                    <p></p>
                    }
                    
            <form onSubmit={onSubmitHandler}>
                <p style={{display: 'flex', justifyContent: 'center'}}>
                    <label>Name: </label><br/>
                    <input className='bigger' type="text" onChange={handleName} value={name}/>
                </p>
                <p style={{display: 'flex', justifyContent: 'center'}}>
                    <label>Preferred Position: </label><br/>
                    <select name="preferredPosition" value={preferredPosition} onChange={e => setPreferredPosition(e.target.value)} >
                        <option value=""> -- select -- </option>
                        <option value="Goalkeeper"> GK goalkeeper  </option>
                        <option value="Defender"> DF defender  </option>
                        <option value="Midfielder"> MF midfielder  </option>
                        <option value="Striker"> ST striker  </option>
                    </select>
                </p>
                {
                !NameError ?
                <button type="submit">Add </button> :
                <button type="submit" disabled> Add</button>
                }
            </form>
        </div>
    )
}

export default PlayerForm;