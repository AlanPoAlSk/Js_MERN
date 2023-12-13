import { useEffect, useState } from 'react';

import axios from 'axios'
import PlayerStatus1 from './PlayerStatus1';


const Status =  () => {
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
    
    return (
        <div>
            {loaded && <PlayerStatus1 players={players} />}
            
        </div>
    )
}
    
export default Status;