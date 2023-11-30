import React , {useState} from 'react';
import './styles.modules.css';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPassword};
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }
    return(
        <form onSubmit={ createUser }>
            <div className='body'>
                <div className='marg'>
                    <label>First Name: </label> 
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div className='marg'>
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div className='marg'>
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className='marg'>
                    <label>Password: </label>
                    <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className='marg'>
                    <label>Confirm Password: </label>
                    <input type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
            </div>
            <div>
                <div className='centered'>
                    <p>Your Form Data</p>
                </div>
                <div className='data'>
                    <div>
                    <p>First Name: <span>{firstName}</span>  </p>
                    <p>Last Name: <span>{lastName}</span>  </p>
                    <p> Email: <span>{email}</span>  </p>
                    <p> Password: <span>{password}</span>  </p>
                    <p> Confirm Password: <span>{confirmPassword}</span>  </p>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form