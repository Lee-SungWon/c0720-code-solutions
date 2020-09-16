import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function ListPokemons(props) {
  // const pokemons = props.pokedex;
  const listPokemons = pokedex.map(pokemon =>
    <li key={pokemon.number}>
      {pokemon.name}
    </li>
  );
  return (
    <ul>{listPokemons}</ul>
  );
}

const container = document.getElementById('root');

ReactDOM.render(
  <ListPokemons />,
  container
);
