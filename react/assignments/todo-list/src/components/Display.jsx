// import {useState} from 'react'
const Display = ({tasks , setTasks}) =>{
    function handleDeleteClick(id) {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    }
    function handleCheckboxChange(id) {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
            return { ...task, done: task.done === 'No' ? 'Yes' : 'No' };
            }
            return task;
        });
        setTasks(updatedTasks);
    }
    return (
        <>
        
            <div>
                <table>
                    <thead>
                        <tr>
                                <th>Title</th>
                                <th>Due to</th>
                                <th>Priority</th>
                                <th>Done</th>
                                <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                {tasks.map(({id,title, date, priority,done },index) => (
                    <tr key={index}>
                            <td className={done === 'Yes' ? 'task-done' : ''}>{title}</td>
                            <td className={done === 'Yes' ? 'task-done' : ''}>{date}</td>
                            {
                                priority == 1?
                                <td style={{color : "yellow"}} className={done === 'Yes' ? 'task-done' : ''}>Low</td>
                                :
                                <td style={{color : "red"}} className={done === 'Yes' ? 'task-done' : ''}>High</td>
                            }
                            
                            {
                                
                                <td>
                                    <input id="centered"
                                        type="checkbox"
                                        checked={done === 'Yes'}
                                        onChange={() => handleCheckboxChange(id)}
                                    />
                                </td>
                                

                            }
                            <td><button onClick={() => handleDeleteClick(id)}>X</button></td>
                            
                        </tr>
                ))}
                    </tbody>
                </table>
            </div>
                
                
        </>
    )
}

export default Display;