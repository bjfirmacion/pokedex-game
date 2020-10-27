import React from 'react';
import Pokedex from './Pokedex';
import { drawCards } from './helpers';

class Pokegame extends React.Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]
  };

  render() {
    const pokemon = this.props.pokemon;
    const playerCount = 2;
    const handCount = Math.floor(pokemon.length / playerCount);

    // Create players array
    const players = [];
    for (let i = 1; i <= playerCount; i++) {
      const player = {
        id: i,
        hand: [],
        totalExp: 0,
        isWinner: false
      }
      players.push(player);
    }

    // for each player:
    players.forEach(player => {

      // draw a hand of cards
      player.hand = drawCards(pokemon, handCount);

      // calculate total experience
      player.hand.forEach(pokemon => player.totalExp += pokemon.base_experience);
    })

    // determine winner:
    const max = Math.max(...players.map(player => player.totalExp));
    players.forEach(player => {
      if (player.totalExp === max) player.isWinner = true;
    })

    return (
      <div className="Pokegame">
        <h1 className="Pokegame-header">Pokedex Game!</h1>
        {players.map(player => (
          <Pokedex
            pokemon={player.hand}
            key={player.id}
            id={player.id}
            score={player.totalExp}
            isWinner={player.isWinner}
          />
        ))}
      </div>
    )
  }
}

export default Pokegame;
