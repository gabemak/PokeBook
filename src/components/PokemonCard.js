import React from 'react';

export default function PokemonCard({
    pokemon
}) {

    return (
        <div className='ResultCardBackground'>
            <div className='ResultCard'>
                <div className='ResultCardTop'>
                    <img src={pokemon.img} />
                </div>
                <h3>Species: {pokemon.species}</h3>
                <h3>Type: {pokemon.type}</h3>
                <h3>HP: {pokemon.hp}</h3>
                <h3>Attack: {pokemon.attack}</h3>
                <h3>Defense: {pokemon.defense}</h3>
            </div>
        </div>

    );
}