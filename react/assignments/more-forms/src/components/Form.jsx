import React , {useState} from 'react';
import './styles.modules.css';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
    

    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length === 0) {
            setFirstNameError(" ");
        } 
        else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters");
        }
        else {
            
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length === 0) {
            setLastNameError(" ");
        } 
        else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters");
        }
        else {
            
            setLastNameError("");
        } 
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length === 0) {
            setEmailError(" ");
        } 
        else if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        }
        else {

            setEmailError("");
        } 
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length === 0) {
            setPasswordError(" ");
        } 
        else if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        }
        else {
            
            setPasswordError("");
        } 
        if(e.target.value === confirmPassword){
            setConfirmPasswordError(" ")
        }
        else {
            setConfirmPasswordError("Confirm Password must match the Password")
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length === 0) {
            setConfirmPasswordError("Confirm Password must match the Password");
        } 
        else {
            
            setConfirmPasswordError("");
        } 
        if(e.target.value != password) {
            setConfirmPasswordError("Confirm Password must match the Password");
        }
    }
    

    return(
        <form onSubmit={ (e) => e.preventDefault() }>
            <div className='body'>
                <div className='marg'>
                    {
                    firstNameError ?
                    <p>{ firstNameError }</p> : 
                    <p></p>
                    }
                    <label>First Name: </label> 
                    <input type="text" value={firstName} onChange={ handleFirstName } />
                </div>
                <div className='marg'>
                {
                    lastNameError ?
                    <p>{ lastNameError }</p> : 
                    <p></p>
                    }
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ handleLastName } />
                </div>
                <div className='marg'>
                {
                    emailError ?
                    <p>{ emailError }</p> : 
                    <p></p> 
                    
                    }
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ handleEmail } />
                </div>
                <div className='marg'>
                {
                    passwordError ?
                    <p>{ passwordError }</p> : 
                    <p></p>
                    }
                    <label>Password: </label>
                    <input type="text" value={password} onChange={ handlePassword } />
                </div>
                <div className='marg'>
                {
                    confirmPasswordError ?
                    <p>{ confirmPasswordError }</p> : 
                    <p></p>
                    }
                    <label>Confirm Password: </label>
                    <input type="text" value={confirmPassword} onChange={ handleConfirmPassword } />
                </div>
            </div>
        </form>
    );
}

export default Form