import React from 'react';
import './Pokecard.css';
import { padZeroes } from './helpers';

class Pokecard extends React.Component {
  static defaultProps = {
    id: 4,
    name: 'Charmander',
    type: 'fire',
    base_experience: 62
  };

  imgURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padZeroes(this.props.id, 3)}.png`;

  render() {
    const props = this.props;
    return (
      <div className="Pokecard">
        <h3 className="Pokecard-header">{props.name}</h3>
        <img className="Pokecard-img" src={this.imgURL} alt={props.name} />
        <p className="Pokecard-text">Type: {props.type}</p>
        <p className="Pokecard-text">EXP: {props.base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;