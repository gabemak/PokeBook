import React from 'react';
import '../App.css';
import { useState } from 'react';
import Axios from 'axios';
import BlackFoxImage from '../images/blackfox.png'
import MewImage from '../images/mew.png'
import Card from '../components/PokemonCard'

export default function Home() {

    const [pokemonName, setPokemonName] = useState('');
    const [pokemonChosen, setPokemonChosen] = useState(false);
    const [pokemon, setPokemon] = useState({
        img1: "",
        img2: "",
        species: "",
        img: "",
        hp: "",
        attack: "",
        defense: "",
        type: "",
    })

    const searchPokemon = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
            setPokemon({
                img1: response.data.sprites.other.home.front_default,
                img2: response.data.sprites.other.home.front_shiny,
                species: response.data.species.name,
                img: response.data.sprites.other.dream_world.front_default,
                hp: response.data.stats[0].base_stat,
                attack: response.data.stats[1].base_stat,
                defense: response.data.stats[2].base_stat,
                type: response.data.types[0].type.name,
            });
            setPokemonChosen(true);
        })
    }

    return (
        <>
            <div className='Main'>
                <div className='WelcomeSection'>
                    <div className='WelcomeImageLeft'>
                        <img src={BlackFoxImage} alt="Black fox image"></img>
                    </div>
                    <div className="wrapper">
                        <div className="wrapperten">
                            <div>
                                <h1>Welcome to</h1>
                            </div>
                            <div>
                                <h3 className="bounce">
                                    <span>P</span>
                                    <span>O</span>
                                    <span>K</span>
                                    <span>E</span>
                                    <span>B</span>
                                    <span>O</span>
                                    <span>O</span>
                                    <span>K</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='WelcomeImageRight'>
                        <img src={MewImage} alt="Mew image"></img>
                    </div>
                </div>

                <div className='TitleSection'>
                    <h1>Pokemon stats</h1>
                    <input type='text' onChange={(event) => { setPokemonName(event.target.value) }}></input>
                    <button onClick={searchPokemon}>Search Pokemon</button>
                    <h5>Please type the name of a Pokemon and click on "Search Pokemon" button</h5>
                    <div>
                        <p className="marquee"><span>Pokemon hints to search: bulbasaur - charmander - pikachu - mew - butterfree - pidgeot - nidorino - wigglytuff - venomoth - poliwag - tentacool - slowbro - doduo - onix - and so much more :-D</span></p>
                    </div>
                    <button>Full Pokemon list</button>
                </div>

                <div className='DisplaySection'>
                    {!pokemonChosen ? (<h1>No Pokemon chosen</h1>) : (
                        <div className='ResultLine'>
                            <div className='DisplaySectionImgLeft'>
                                <img src={pokemon.img1} />
                            </div>
                            <Card pokemon={pokemon} />
                            <div className='DisplaySectionImgRight'>
                                <img src={pokemon.img2} />
                            </div>
                        </div >
                    )
                    }

                    <div className='StrongestPokemons'>
                        <h2>Strongest Pokemons:</h2>
                        {pokemon.attack > 95 ? (<h1>No Pokemon chosen</h1>) : (
                            <div className='Result'>
                                <img src={pokemon.img} />
                                <h3>Species: {pokemon.species}</h3>
                                <h3>Type: {pokemon.type}</h3>
                                <h3>HP: {pokemon.hp}</h3>
                                <h3>Attack: {pokemon.attack}</h3>
                                <h3>Defense: {pokemon.defense}</h3>
                            </div>
                        )}
                    </div>

                </div >

            </div >
        </>
    );
    console.log(pokemon.species)
}