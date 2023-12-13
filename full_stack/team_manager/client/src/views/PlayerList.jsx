import axios from 'axios';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
    
const PlayerList = (props) => {
    
    const { removeFromDom } = props;
    
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
    

    return (
        <div>
            <Link className='margR'style={{color:'darkslateblue'}}>Manage Players</Link>
            |
            <Link className='margL' to={'/status/game/1'}>Manage Player Status</Link>
            <hr />
            <div>
            <Link className='margR' style={{color:'darkslateblue'}}>List</Link> 
            |
            <Link className='margL' to="/players/addplayer">Add Player</Link>
            <hr />
            <table className='border size'>
                <thead>
                    <tr>
                    <th className='border'>Players name</th>
                    <th className='border'>Preferred position</th>
                    <th className='border'>Actions</th>
                    </tr>
                </thead>
                <tbody>
            {props.players.map( (player, i) =>
                    
                        <tr key={i} className='center'>
                            <td className='border' style={{fontWeight:'bold'}}> {i+1}. <Link to={'/status/game/1'} >{player.name}</Link> </td>
                            <td className='border'> {player.preferredPosition} </td>
                            <td className='border'> <button onClick={(e)=>{deletePlayer(player._id)}}>Delete</button></td>
                        </tr>
                )}
                
                </tbody>
            </table>
            </div>
                
        </div>
    )
}
    
export default PlayerList;

