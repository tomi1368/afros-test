const pokeResponse = async () => {
  const responsea = await (
    await fetch("https://pokeapi.co/api/v2/pokemon/")
  ).json();
  return Promise.allSettled(
    responsea.results.map((pokemon) =>
      fetch(`${pokemon.url}`).then((res) => res.json())
    )
  ).then((values) =>
    values.map((value) => (value.status != "fulfilled" ? null : value.value))
  );
};

const sumPokemonTypeTotal = async (type) => {
  const response = await pokeResponse();
  const PokemonTypeFilter = (pokemon) =>
    pokemon.types.find((typePokemon) => typePokemon.type.name == type);
  const countPokemonType = response.filter(PokemonTypeFilter).length;
  return countPokemonType;
};

const pokemonHasTwoTypes = async (type1, type2) => {
  const response = await pokeResponse();
  const PokemonTypeFilter = (pokemon) =>
    pokemon.types.every(
      (typePokemon) =>
        Object.values(typePokemon.type).includes(type1) ||
        Object.values(typePokemon.type).includes(type2)
    );
  const listPokemonType = response.filter(PokemonTypeFilter);
  return listPokemonType;
};


const pokemonNumber = async (pokemonName) => {
  const response = await pokeResponse();
  const pokemonFounded = response.find(
    (pokemon) => pokemon.name == pokemonName
  );
  return pokemonFounded.id;
};

const pokemonBaseStats = async (pokemonId) => {
  const response = await pokeResponse();
  const pokemonFounded = response.find((pokemon) => pokemon.id == pokemonId);
  const groupStats = pokemonFounded.stats.reduce((result, item) => {
    let obj = {
      [item.stat.name]: {
        ...item,
      },
    };
    return { ...result, ...obj };
  }, {});
  console.log({
    [pokemonFounded.name]: groupStats,
  })
  return {
    [pokemonFounded.name]: groupStats,
  };
};

const pokemonsByIdAndType = async (pokemonId,pokemonType)=>{
  const response = await pokeResponse();
  const pokemonFounded = response.find((pokemon) => pokemon.id == pokemonId);
  return pokemonFounded.types.find(type=>type.type.name == pokemonType ) ? true : false
}


pokemonHasTwoTypes("poison", "grass");
