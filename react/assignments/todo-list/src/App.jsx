import { useState} from 'react'
import './App.css'
import Form from './components/Form'
import Display from './components/Display'

function App() {
  const [tasks, setTasks] = useState([
    {id: 1,title: "Concert ticket", date: "2023-12-29", priority: 1,done: 'No'},
    {id: 2,title: "shopping", date: "2023-12-02", priority: 1,done: 'No'},
    {id: 3,title: "groceries", date: "2023-12-08", priority: 2, done: 'No'}
  ]);
    
  const addTask = (task) => {
    const newTask = {...task,id: tasks.length + 1  };
    console.log(newTask)
    setTasks([...tasks, newTask]);
  }


  return (
    <>
      <h1>Welcome to the AS Todo List!</h1>
      <Form addTask={addTask}/>
      <Display tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
