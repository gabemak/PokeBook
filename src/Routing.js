import { Routes, Route } from 'react-router-dom';
import PokemonList from './pages/PokemonList';
import Home from './pages/Home';

export const Routing = () => {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/pokemonList' element={<PokemonList />} />
            </Routes>
        </div>


    )
}