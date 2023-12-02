import {useState} from 'react'
import './App.css'
import TabsShow from './components/Tabs'


function App() {
  const tabs = [
    {name: "Alan", age : 32 , born_in : 'Italy', currently_in: "U.S." },
    {name: "Bob", age : 23 , born_in : 'Ireland', currently_in: "Spain" },
    {name: "Sam", age : 51 , born_in : 'Canada', currently_in: "France" }
    ]
  const [selected,setSelected] = useState(0)
  
  const table = {
    border :'2px solid black',
    fontSize : 'large'
  }
  

  return (
    <>
    { 
      tabs.map ((tab , index) => 
        <TabsShow key = {index} tab = {tab} index={index} selected= {selected} setSelected={setSelected} name = {tab.name} age = {tab.age} country_of_birth ={tab.country_of_birth} current_in = {tab.country_of_birth}/>
      )
    }
    {
        <div>
          <h3> Right here the info about {tabs[selected].name}</h3>
          <table>
            <thead>
              <tr>
                <th style={{...table}}>Age</th>
                <th style={{...table}}>Born in</th>
                <th style={{...table}}>Currently in</th>
              </tr>
            </thead>
          
          <tr>
            <td style={{...table,color: 'goldenrod',fontWeight:'bolder'}}>{tabs[selected].age}</td>
            <td style={{...table,color: 'goldenrod',fontWeight:'bolder'}}>{tabs[selected].born_in}</td>
            <td style={{...table,color: 'goldenrod',fontWeight:'bolder'}}>{tabs[selected].currently_in}</td>
          </tr>
          
          </table>
        </div>

    }
    
    
    
    </>
  );
}

export default App
