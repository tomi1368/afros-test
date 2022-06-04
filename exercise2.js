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
  console.log(response)
  const PokemonTypeFilter = (pokemon) =>
    pokemon.types.find((typePokemon) => typePokemon.type.name == type);
  const countPokemonType = response.filter(PokemonTypeFilter).length;
  console.log(countPokemonType)
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
  console.log(listPokemonType)
  return listPokemonType;
};


const pokemonNumber = async (pokemonName) => {
  const response = await pokeResponse();
  console.log(response)
  const pokemonFounded = response.find(
    (pokemon) => pokemon.name == pokemonName
  );
  console.log(pokemonFounded.id)
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
  console.log(pokemonFounded.types.find(type=>type.type.name == pokemonType ) ? true : false)
  return pokemonFounded.types.find(type=>type.type.name == pokemonType ) ? true : false
}

const ascOrDesc = (asc)=> asc ? 1 : -1


const sortByName = (pokemonList,asc) => pokemonList.sort((a,b)=> {return (a.name < b.name ? ascOrDesc(!asc) : ascOrDesc(asc))})

const sortByWeigth = (pokemonList,asc) => pokemonList.sort((a,b)=>{return (a.weight < b.weight ? ascOrDesc(!asc) : ascOrDesc(asc))})

const sortByType = (pokemonList,asc)=>{
  const types = pokemonList.map(pokemon=>pokemon.types.map(type=>type.type.name)).flat()
  const noRepeatedTypes = Array.from(new Set(types)).sort((a,b)=> {return  a < b ? ascOrDesc(!asc) : ascOrDesc(asc)})
  const sorted = noRepeatedTypes.map(typeP=> pokemonList.filter(pokemon=> ((pokemon.types.map(type=>type.type.name)).flat()).includes(typeP))) 
  return sorted
}


const sortedPokemons = async(pokemonsList,order,asc)=>{
  const response = await pokeResponse();
  const pokemons = response.filter(pokemon=>pokemonsList.find(el=>el === pokemon.id)) //[2,1] bulbasaur
  console.log(pokemons,asc)
  switch(order){
    case "nombre":
      console.log(sortByName(pokemons,asc))
      return sortByName(pokemons,asc)
    case "peso":
      console.log(sortByWeigth(pokemons,asc))
      return sortByWeigth(pokemons,asc)
    case "tipo":
      console.log(sortByType(pokemons,asc))
      return sortByType(pokemons,asc)
    default:
      return pokemons
  }

}

