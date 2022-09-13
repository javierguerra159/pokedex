import React from 'react';
import { useState } from 'react';
import { useNavigate,  } from 'react-router-dom';
import { changeUser } from '../store/slices/user.slices';
import { useDispatch } from 'react-redux';
import image from '../image/image11.png';

const PokemontInput = () => {

    const [ input, setInput ] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()
    

    const getNmame = () =>{
       
        navigate("/pokedex");
        dispatch(changeUser(input));
    
    }

    return (
        <>
        
        <div id="input">
            <img src={image} alt="imagen" />
             <h1 className='title'>¡HOLA ENTRENADOR! </h1>
            <h2 className='sub-title'>para poder comenzar dame tu nombre</h2>
            <input  type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Escribe tu nombre" className="search" />
            <button onClick={getNmame} className="button">Comenzar</button>
        </div>
        <footer className='footer'>
            <div className="red"></div>
            <div className="black"></div>
        </footer>
        </>
    );
};

export default PokemontInput;

