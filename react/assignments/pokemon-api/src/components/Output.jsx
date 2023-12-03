import { useState} from 'react';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState(null);
    const [error, setError] = useState(null);

    const fetchPokemon = async () => {
        try {
            let tempPokemonList = [];
            let offset = 0;
            const limit = 20;
            while (tempPokemonList.length < 807) {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const data = await response.json();
                tempPokemonList = tempPokemonList.concat(data.results);
                offset += limit;
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
                        <li key={index}>#{index +1} : {pokemon.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PokemonList;
