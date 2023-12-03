import {useState} from 'react';

const Form = ({addTask}) =>{

    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [priority, setPriority] = useState('');
    const [done, setDone] = useState('No');

    const [errors, setErrors] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Thank you for using our todo list app');
    }

    const buttonHandler = () => {
        console.log(id,title, date, priority,done);
        const errs = [];
        if(title.length < 2){
            errs.push("Title is too short!");
        }
        if(date.length<1){
            errs.push("Date required");
        }
        if(priority.length<1){
            errs.push("Priority required");
        }
        
        if(errs.length === 0){
            setErrors([]);
            setId('');
            setTitle('');
            setDate('');
            setPriority("1");
            setDone("No");
            addTask({id,title, date, priority,done});
        }else{
            setErrors(errs);
        }
        
        
    }
        let curr = new Date();
        curr.setDate(curr.getDate() + 3);
        var minDate = curr.toISOString().substring(0,10);
    // const [errors, setErrors] = useState([]);

    return (
        <>
        {
                errors.map((value, index) => 
                    <p key={index} style={{color:"red"}}>{value}</p>
                )
            }
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="title">Title:</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required/>
                </div>
                <div>
                <label htmlFor="date">Due to:</label>
                <input type="date" onChange={(e) => setDate(e.target.value)} value={date} min={minDate} required/>
                </div>
                <div style={{display: 'flex'}}>
                <label htmlFor="priority">Priority:</label>
                <input type="number" min={1} max={2} onChange={(e) => setPriority(e.target.value)} value={priority} required/>
                <p style={{height: '10px', color:'black' , fontWeight:'bold'}}>[1 = Low | | 2 = High]</p>
                </div>
                <button onClick={buttonHandler}>Add Task</button>
            </form>
            
        </>
    )
}

export default Form