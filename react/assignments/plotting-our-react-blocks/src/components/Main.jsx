import React from 'react';
import './styles.modules.css';


const Main = (props) => {
    return(
        <div className='main'>{props.children}</div>
    )
}

export default Main;