import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';
import image from '../image/image11.png';


const Pokedex = () => {

    const userName = useSelector(state => state.user);

    const [pokemons, setPokemons] = useState([])
    const [pokemonSearch, setPokemonSearch] = useState("");
    const [types, setTypes] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126/')
            // axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
            .then(res => setPokemons(res.data?.results))

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypes(res.data.results))

    }, [])


    const search = () => {
        navigate(`/pokedex/${pokemonSearch}`)
    }

    const filterPokemons = (e) => {
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon));
    }



    const [page, setPage] = useState(1);

    const pokemonNumber = 20;
    const lastIndex = pokemonNumber * page;
    const firsIndex = lastIndex - pokemonNumber;
    const pokemonPaginated = pokemons.slice(firsIndex, lastIndex)

    const lastPage = Math.ceil(pokemons.length / pokemonNumber);



    return (
        <div className="cabezera">
            <div className="red"></div>
            <div className="black"></div>
            <img className='image-pokedex' src={image} alt="pokedex"/>
            <div className='container-pokemon'>


                <h2 className='title-2'><b className='b-red'> Bienvenido {userName}!,</b> aqui podras encontrar tu pokemon favorito</h2>

                <div className='input-search'>

                    <div>

                        <input className="search-input"
                            type="text"
                            value={pokemonSearch}
                            onChange={e => setPokemonSearch(e.target.value)}
                            placeholder="buscar personajes"
                        />
                        <button className="button" onClick={search}>Buscar</button>

                    </div>
                    <select onChange={filterPokemons} className="search-select">
                        <option>todos los pokemon</option>
                        {
                            types.map(type => (
                                <option key={type.url} value={type.url}>{type.name}</option>
                            ))
                        }
                    </select>
                </div>

                <ul className='list'>
                    {
                        pokemonPaginated?.map(pokemon => (
                            <PokemonCard key={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url}
                                pokemonUrl={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url} />

                        ))
                    }
                </ul>
                <div className='container-button'>

                    <button className='button-end'
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                    >
                        prev
                    </button>

                    <button  className='button-end'
                         onClick={() => setPage(page + 1)}
                         disabled={page === lastPage}
                    >
                        next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pokedex;