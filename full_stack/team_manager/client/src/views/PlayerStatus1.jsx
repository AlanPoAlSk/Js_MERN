import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const PlayerStatus1 = (props) => {
    const [playerStatus, setPlayerStatus] = useState({});

    useEffect(() => {
        // We have to set Undefined as default value
        const initialStatus = {};
        props.players.forEach((_, index) => {
            initialStatus[index] = 'Undecided';
        });
        setPlayerStatus(initialStatus);
    }, []);

    const handleStatusChange = (index, status) => {
        setPlayerStatus({
            ...playerStatus,
            [index]: status,
        });
    }

    return (

        <div>
            <Link className='margR' to={'/players/list'}>Manage Players</Link>
            |
            <Link className='margL' style={{color:'darkslateblue'}} >Manage Player Status</Link>
            <hr />
            <div>
            <h1>Player Status - Game 1</h1>
            <Link className='margR' style={{color:'darkslateblue'}}>Game 1</Link>
            |
            <Link className='margRL' to={'/status/game/2'}>Game 2</Link>
            |
            <Link className='margL' to={'/status/game/3'}>Game 3</Link>
            <table className='border size'>
                <thead>
                    <tr>
                    <th className='border'>Players name</th>
                    <th className='border' colSpan='3'>Actions</th>
                    </tr>
                </thead>
                <tbody>
            {props.players.map( (player,index) =>
                    
                        <tr key={index} className='center'>
                            <td className='border' style={{fontWeight:'bold'}}> {index+1}. <Link to={'/status/game/1'} >{player.name}</Link> </td>
                            <td>
                                <button
                                    style={{
                                        backgroundColor:
                                            playerStatus[index] === 'Playing' ? 'green' : '',
                                    }}
                                    onClick={() => handleStatusChange(index, 'Playing')}
                                >
                                    Playing
                                </button>
                            </td>
                            <td>
                                <button
                                    style={{
                                        backgroundColor:
                                            playerStatus[index] === 'Not Playing' ? 'red' : '',
                                    }}
                                    onClick={() => handleStatusChange(index, 'Not Playing')}
                                >
                                    Not Playing
                                </button>
                            </td>
                            <td>
                                <button
                                    style={{
                                        backgroundColor:
                                            playerStatus[index] === 'Undecided' ? 'yellow' : '',
                                        color: playerStatus[index] === 'Undecided' ? 'black' : '',
                                    }}
                                    onClick={() => handleStatusChange(index, 'Undecided')}
                                    
                                >
                                    Undecided
                                </button>
                            </td>
                        </tr>
                )}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default PlayerStatus1;