import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonalCard';

let people = [
  {firstName : 'Jane', lastName : 'Doe', age : 45, colorHair : 'Black'},
  {firstName : 'John', lastName : 'Smith', age : 88, colorHair : 'Brown'},
  {firstName : 'Millard', lastName : 'Fillmore', age : 50, colorHair : 'Brown'},
  {firstName : 'Maria', lastName : 'Smith', age : 62, colorHair : 'Brown'}
]

function App() {
  return (
    <div className="App">

      {people.map(person => {
        return <PersonCard firstName = {person.firstName} lastName = {person.lastName} age = {person.age} colorHair = {person.colorHair} />
      })

      }
    </div>
  );
}

export default App;
