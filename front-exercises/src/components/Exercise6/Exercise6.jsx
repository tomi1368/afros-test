import React, { useState } from "react";
import axios from "axios";
import "./Exercise6.css";

const Exercise6 = () => {
  const [pokemon, setPokemon] = useState(null);
  const [fieldContent, setFieldContent] = useState("");
  const pokemonRequest = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${fieldContent || "pikachu"}`
    );
    setPokemon(response.data);
  };

  return (
    <div>
      <div className="search">
        <input
          className="search_field"
          type="text"
          value={fieldContent}
          onChange={(e) => setFieldContent(e.target.value)}
        />
        <button className="search_field" onClick={() => pokemonRequest()}>
          Buscar Pokemon
        </button>
      </div>
      <div className="card_wrapper">
      {pokemon && (
        <div className="card">
          <div>
            <img src={pokemon.sprites.back_default} alt="" />
          </div>
          <div>
            <h3>Nombre: {pokemon.name}</h3>
            <h3>Numero: {pokemon.id}</h3>
            <h4>Tipos:</h4>
            {pokemon.types.map((el) => (
              <h4> -{el.type.name}</h4>
            ))}
            <h3>Peso:{pokemon.weight}</h3>
            <h3>Altura:{pokemon.height}</h3>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Exercise6;
