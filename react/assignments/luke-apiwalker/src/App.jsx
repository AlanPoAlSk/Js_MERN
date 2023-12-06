import { useState } from 'react'
import {Routes, Route , useNavigate} from 'react-router-dom'
import './App.css'
import People from './components/People'
import Planet from './components/Planets'

function App() {
  
  const [category, setCategory] = useState('people');
  const [number, setNumber] = useState(1);

  const navigate  = useNavigate();

  const fetchData = (e) => {
    e.preventDefault();
    console.log('button clicked');

    navigate(`/${category}/${number}`)


  }

  return (
    <>
    {/* <div>categ: {category}</div>
    number: {number} */}
    <div style={{display:'flex', alignItems: 'center', marginBottom: '20px', fontSize: 'larger'}}>
      <div>
        <label htmlFor="category">Search for :      </label>
        <select style={{width: '100px', marginRight:'20px'}} onChange={(e) => setCategory(e.target.value)} name="category" id="category">
          <option value="people">people</option>
          <option value="planets">planets</option>
        </select>
      </div>
      <div>
        <label htmlFor="id">ID:     </label>
        <input style={{width:'80px'}} onChange={(e) => setNumber(e.target.value)} type="number" min={1} value={number} />
      </div>
    </div>
        <button onClick={fetchData}> Search</button>
      <Routes>
        <Route path='/people/:number' element={<People/>}/>
        <Route path='/planets/:number' element={<Planet/>}/>
      </Routes>
    </>
  )
}

export default App
