import { Routes, Route } from 'react-router-dom';
import './App.css'
import Main from './components/Main';
import AuthorForm from './components/AuthorForm';
import Edit from './components/AuthorEdit';
import Home from './components/Home';

function App() {
    return (
    <div className="App">
            <Routes>
                <Route element={<Home/>} path='/'/>
                <Route element={<Main/>} path="/authors" />
                <Route element={<AuthorForm/>} path="/authors/new" />
                <Route element={<Edit/>} path="/authors/:id" />
            </Routes>
    </div>
    );
}
export default App;



