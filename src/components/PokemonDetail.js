import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import image from '../image/image11.png';

const PokemonDetail = () => {

    const [pokemon, setPokemon] = useState([])
    const [colorCard, setColorCard] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [id])

    useEffect(() => {
        if (pokemon.species !== undefined) {

            axios.get(pokemon.species?.url)
                .then(res => setColorCard(res.data))
        }
    }, [pokemon])

    return (
        <div className='container-pincipal'>
            <div className="red"></div>
            <div className="black"></div>
            <img className='image-pokedex' src={image} alt="pokedext"/>
            <div className='container-detail'>
                <img src={pokemon.sprites?.other.dream_world.front_default} alt="imagen" className='image-detail' />

            </div >
            <div className='detail'>
                <div className='container-color'
                    style={{
                        background: colorCard.color?.name
                    }}
                >

                </div>

                <h1>#<b>{id}</b></h1>
                <h1>{pokemon?.name}</h1>
                <div className='container-p-a'>
                    <div>

                        <p>altura</p>
                        <b>{pokemon.height}</b>
                    </div>
                    <div >

                        <p > peso</p>
                        <b> {pokemon.weight}</b>
                    </div>

                </div>
                <div className='container-ability'>

                    <div>
                        <h2 className='description'>
                            tipo
                        </h2>
                        <div className='t-a'>
                            <b className='p-information' style={{ background: colorCard.color?.name }}> {pokemon.types?.[0]?.type.name}</b> <b className='p-information' style={{ background: colorCard.color?.name }}>{pokemon.types?.[1]?.type.name}</b>

                        </div>
                    </div>
                    <div>
                        <h2 className='description'>Abilidades</h2>
                        <div className='t-a'>

                            <b className='p-information'> {pokemon.abilities?.[0]?.ability.name}</b> <b className='p-information'>{pokemon.abilities?.[1]?.ability.name}</b>
                        </div>
                    </div>
                </div>
                <div className='card-stats ' >
                    <h1 className='container-stats'>stats</h1>
                    <hr /> 
                    <ul className='ul-list'>
                        <li className='list-stats'>


                            <p className='p-stats'>HP</p>
                            <b className='b-stats'>{pokemon.stats?.[0].base_stat}</b>


                        </li>
                        <li className='list-stats'>
                            <p className='p-stats'>ATAQUE</p>
                            <b className='b-stats'>{pokemon.stats?.[1].base_stat} </b>
                        </li>
                        <li className='list-stats'>
                            <p className='p-stats'>DEFENSA</p>
                            <b className='b-stats'>{pokemon.stats?.[2].base_stat}</b>
                        </li>
                        <li className='list-stats'>
                            <p className='p-stats'>VELOCIDAD</p>
                            <b className='b-stats'> {pokemon.stats?.[5].base_stat}</b>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;