import { useState } from 'react';
import axios from 'axios';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState(null);
    const [error, setError] = useState(null);

    const fetchPokemon = async () => {
        try {
            let tempPokemonList = [];
            
            const limit = 807;
            while (tempPokemonList.length < 807) {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
                tempPokemonList = tempPokemonList.concat(response.data.results);
                
            }
            setPokemonList(tempPokemonList.slice(0, 807));
        } catch (error) {
            setError('Error fetching Pokemon: ' + error.message);
        }
    };

    const handleButtonClick = () => {
        if (!pokemonList) {
            fetchPokemon();
        }
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Fetch Pokemon</button>
            
            {error && <p>{error}</p>}
            {pokemonList && (
                <ul>
                    {pokemonList.map((pokemon, index) => (
                        <li key={index}>#{index + 1} : {pokemon.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PokemonList;
