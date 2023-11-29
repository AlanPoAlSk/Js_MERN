import React from 'react';

const PersonCard = (props) => {
    const {firstName , lastName , age , colorHair } = props;
    return(
        <div>
            <h1> {lastName} , {firstName} </h1>
            <p> Age : {age} </p>
            <p> Hair Color : {colorHair} </p>
        </div>
    )
}


export default PersonCard;