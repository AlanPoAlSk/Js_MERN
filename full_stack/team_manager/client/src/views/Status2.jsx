import { useEffect, useState } from 'react';

import axios from 'axios'
import PlayerStatus2 from './PlayerStatus2';


const Status2 =  () => {
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
            {loaded && <PlayerStatus2 players={players} />}
            
        </div>
    )
}
    
export default Status2;