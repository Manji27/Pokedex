import React from 'react';
import typeColors from '../../helpers/typeColors'
import './Card.css';


function Card({ pokemon }) {


    return (
        <div key={pokemon.id} className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
            </div>
            <div className="Card__name">
                <p className="numberPokemon">No.00{pokemon.id}</p>
                <p>{pokemon.name}</p>
            </div>
            <div className="Card__types">
                {
                    pokemon.types.map(type => {
                        return (
                            <div  className="Card__type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Card;
