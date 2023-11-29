import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonalCard'

let people = [
  {firstName : 'Jane', lastName : 'Doe', age : 45, colorHair : 'Black'},
  {firstName : 'John', lastName : 'Smith', age : 88, colorHair : 'Brown'},
]

function App() {

  return (
    <>
      <div>
      {people.map(person => {
        return <PersonCard firstName = {person.firstName} lastName = {person.lastName} age = {person.age} colorHair = {person.colorHair} />
      })
      }
      </div>
    </>
  )
}

export default App
