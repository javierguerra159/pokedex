import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const PokemonCard = ({ pokemonUrl }) => {

    const [pokemonInfo, setPokemonInfo] = useState({})

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => setPokemonInfo(res.data))
    }, [pokemonUrl])

    console.log(pokemonInfo)

    return (
        <div className='card-container' onClick={() => navigate(`/pokedex/${pokemonInfo.id}`)}>
            <li className="card-list">
                <div className='card-vacia'>

                </div>
                    <img src={pokemonInfo.sprites?.other.dream_world.front_default} className="image-card " alt='imageList' />
                <div className='container-description'>

                    <h1 className='name'>{pokemonInfo.name}</h1>
                    <p>tipo <b>{pokemonInfo.types?.[0].type.name}</b></p>
                     
                    <div className='character-list'>
                        <p className='p-info'>HP <b>{pokemonInfo.stats?.[0].base_stat}</b></p>
                        <p className='p-info'>ATAQUE <b>{pokemonInfo.stats?.[1].base_stat}</b> </p>
                        <p className='p-info'>DEFENSA <b> {pokemonInfo.stats?.[2].base_stat}</b></p>
                        <p className='p-info'>VELOCIDAD <b>{pokemonInfo.stats?.[5].base_stat}</b> </p>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default PokemonCard;