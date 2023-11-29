import React, {useState} from 'react';


const PersonCard = (props) => {
    const {firstName , lastName , age , colorHair } = props;
    let [count, setCount] = useState(age);
    return(
        <div>
            <h1> {lastName} , {firstName} </h1>
            <p> Age : {count} </p>
            <p> Hair Color : {colorHair} </p>
            <button onClick={() => setCount(count+1)}>Birthday Button for {firstName} {lastName} </button>
        </div>
    )
}


export default PersonCard;