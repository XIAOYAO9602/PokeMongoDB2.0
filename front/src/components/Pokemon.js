import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles/Pokemon.css";

function Pokemon(props) {
  const [search, setPokemon] = useState("");

  const renderPokemon = () => {
    return props.pokemon
      .filter(
        (p) =>
          p.Pokemon && p.Pokemon.toLowerCase().startsWith(search.toLowerCase())
      )
      .map((p) => (
        <li key={p._id} className="Pokemon-li">
          {p.Pokemon} (#{p._id}) <br />
          <img
            className="pokemon-img"
            src={`./images/${p._id}.png`}
            alt={`${p.Pokemon} (#${p._id}) Sprite`}
            title={`${p.Pokemon} (#${p._id})`}
          />{" "}
          <br />
          HP: {p.HP} <br />
          ATK: {p.Atk} <br />
          DEF: {p.Def} <br />
          Special Atk: {p.SpA} <br />
          Special Defense: {p.SpD} <br />
          Speed: {p.Spe} <br />
          Type: {p.Type_1} <br />
          Type II: {p.Type_2} <br />
          <form action="/updateTeam" method="post">
            <label htmlFor="position">
              Choose the position: {" "}
            <select name="position" id={`position${p._id}`}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            </label>
            <input
              type="hidden"
              name="newPokemon"
              id={`addTeam${p._id}`}
              value={`${p._id}`}
            />
            <input
              type="hidden"
              name="user"
              id={`addTeam${props.user}${p._id}`}
              value={`${props.user}`}
            />
            <br />
            <button type="submit">Add to team</button>
          </form>
          <form action="/newFav" method="post">
            <input
              type="hidden"
              name="newPokemon"
              id={`addFavorite${p._id}`}
              value={`${p._id}`}
            />
            <input
              type="hidden"
              name="user"
              id={`addFavorites${props.user}${p._id}`}
              value={`${props.user}`}
            />
            <button type="submit">Add to favorites</button>
          </form>
          <br />
        </li>
      ));
  };

  console.log("rendering Pokemon", search);

  return (
    <div className="col">
      <h1>Add Pokemon to your Team!</h1>
      <label htmlFor="search">
        Search for a Pokémon by name to add to your team or favorites:{" "}
        <input
          type="text"
          value={search}
          onChange={(evt) => setPokemon(evt.target.value)}
        />
      </label>
      <br />
      <ol class="Pokemon-ol">{renderPokemon()}</ol>
    </div>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.array,
};

export default Pokemon;
