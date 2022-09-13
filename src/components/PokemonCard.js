import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const PokemonCard = ({ pokemonUrl }) => {

    const [pokemonInfo, setPokemonInfo] = useState({})
    const [colorCard, setColorCard] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(pokemonUrl)
            .then((res) => setPokemonInfo(res.data))
    }, [pokemonUrl])

    useEffect(() => {
        if (pokemonInfo.species !== undefined) {

            axios.get(pokemonInfo.species?.url)
                .then(res => setColorCard(res.data))
        }
    }, [pokemonInfo])
    console.log(colorCard, "color")
    console.log(pokemonInfo)

    return (
        <div className='card-container' onClick={() => navigate(`/pokedex/${pokemonInfo.id}`)}>
            <li className="card-list"
                style={{
                    background: colorCard.color?.name
                }}
            >
                <div className='card-vacia'
                    style={{
                        background: colorCard.color?.name,
                        borderColor: colorCard.color?.name
                    }}
                >

                </div>
                <img src={pokemonInfo.sprites?.other.dream_world.front_default} className="image-card " alt='imageList' />
                <div className='container-description'>

                    <h1 className='name' style={{ color: colorCard.color?.name }}>
                        {pokemonInfo.name}
                    </h1>
                    <p>tipo <b>{pokemonInfo.types?.[0].type.name}</b></p>

                    <div className='character-list'>
                        <div className='div-character'>
                            <p className='p-info'>
                                HP
                                <b style={{ color: colorCard.color?.name }}>
                                    {pokemonInfo.stats?.[0].base_stat}
                                </b>
                            </p>

                        </div>
                        <p className='p-info'>ATAQUE <b style={{ color: colorCard.color?.name }}>{pokemonInfo.stats?.[1].base_stat}</b> </p>
                        <p className='p-info'>DEFENSA <b style={{ color: colorCard.color?.name }}> {pokemonInfo.stats?.[2].base_stat}</b></p>
                        <p className='p-info'>VELOCIDAD <b style={{ color: colorCard.color?.name }}>{pokemonInfo.stats?.[5].base_stat}</b> </p>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default PokemonCard;