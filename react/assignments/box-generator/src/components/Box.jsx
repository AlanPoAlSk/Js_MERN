import {useState} from 'react';

const BoxForm = () => {
    
    
    const [colors, setColors] = useState([]);
    const [color, setColor] = useState('')

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };
    const createBoxColor = (e) => {
        e.preventDefault();
        console.log('you just clicked the button')

        setColors([...colors, color]);
        setColor('');
        
    }
    
    const boxStyle = {
        width: '200px',
        height: '200px',
        // backgroundColor: color,
        border:'2px solid black', 
        margin: '20px',
        marginBottom: '10px',
    };
    
    const boxContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '100%', 
    };

    const bigger = {
        fontSize : 'xx-large'
    }
    
    return (
    <div>
        <form onSubmit={createBoxColor }>
        <div>
            <label htmlFor="boxes " style={{...bigger, fontWeight: "bolder"}}> Create a Box </label>
            <input type="text" style={bigger} placeholder='Enter color' value={color} onChange={handleColorChange}/>
            <button style={bigger}>Add</button>
        </div>
        </form>
        <div style={boxContainerStyle}>
        {
            colors.map((color,i) => (
                <div key={i} style={{...boxStyle, backgroundColor: color,}}> </div>
            ))
        }
        </div>
    </div>
)
}

export default BoxForm;