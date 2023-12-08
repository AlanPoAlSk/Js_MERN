import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Main from './components/Main';
import Detail from './components/Detail';
function App() {
    return (
    <div className="App">
            <Routes>
                <Route element={<Main/>} path="/products/" />
                <Route element={<Detail/>} path="/products/:id" />                         
            </Routes>
    </div>
    );
}
export default App;



