import { useEffect, useState } from 'react';

import axios from 'axios'
import PlayerList from './PlayerList';

const Main =  () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[players]);
 //with [players] ,when the list of products changes, it will update the list of all products displayed
    
    const deletePlayer = (playerId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this player? |  There is no coming back!');

        if (confirmDelete) {
            axios.delete(`http://localhost:8000/api/players/${playerId}`)
                .then(res => {
                    removeFromDom(playerId);
                })
                .catch(err => console.error(err));
        }
    }
    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id != playerId));
    }
    return (
        <div>
            {loaded && <PlayerList players={players} removeFromDom = {removeFromDom}/>}
            
        </div>
    )
}
    
export default Main;

