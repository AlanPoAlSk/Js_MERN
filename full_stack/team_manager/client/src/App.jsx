import { Routes, Route } from 'react-router-dom';
import './App.css'


import PlayerForm from './components/PlayerForm';
import Home from './views/Home';
import Main from './views/Main';

import Status from './views/Status';
import Status2 from './views/Status2';
import Status3 from './views/Status3';


function App() {
    return (
    <div className="App">
            <Routes>
                <Route element={<Home/>} path='/'/>
                <Route element={<Main/>} path='/players/list'/>
                <Route element={<PlayerForm/>} path="/players/addplayer" />
                <Route element={<Status/>} path='/status/game/1'/>
                <Route element={<Status2/>} path='/status/game/2'/>
                <Route element={<Status3/>} path='/status/game/3'/>
            </Routes>
    </div>
    );
}
export default App;