
import React, {useEffect, useState} from 'react'
import SearchInput from './Pokemon/Components/SearchInput';
import PokemonListCard from './Pokemon/Components/PokemonList/PokemonListCard';
import PokemonList from './Pokemon/Components/PokemonList/Index';
import PokemonViewer from './Pokemon/Components/PokemonViewer';

const App = () =>
  {
  // States
  const [pokemonList, setPokemonList] = useState([
   
  ]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPokemon, setIsLoadingPokemon] = useState(false);



  let filteredPokemonList = pokemonList;

  if (search.length > 0) {
    filteredPokemonList = pokemonList.filter((p) => {
      const str = p.name.toLowerCase();
      const searchValue = search.toLowerCase();

      return str.includes(searchValue);
    });
  }

  // Handlers & Functions
  const selectPokemonHandler = (data) => {
    setSelectedPokemon(data);
    fetchPokemonData(data.name);
  };

  const removeSelectedPokemonHandler = () => {
    setSelectedPokemon(null);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  async function fetchPokemonList(){
    setIsLoading(true);
    console.log("fetching dta");
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000");
    console.log(response);
    const data = await response.json();
    const {results} = data;
    setPokemonList(results);
    setIsLoading(false);
}

async function fetchPokemonData(pokemonName){
  setIsLoadingPokemon(true);
  const response = await fetch( "https://pokeapi.co/api/v2/pokemon/" + pokemonName);
    const data = await response.json();
    console.log(data);
    const pokemonData = {
      name: data.name,
      img_url: data.sprites.front_default,
    };
    console.log({pokemonData});
    setIsLoadingPokemon(false);
    // setSelectedPokemon({name:data.name,image_url:data.sprites.front_default});
}  
  
  

  console.log({pokemonList});

  useEffect(() => {
   
    fetchPokemonList();
  },[]);

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-slate-200 ">
        <div className="py-4 bg-amber-300">
          <h1 className="text-4xl text-center text-amber-950">Pokemon List </h1>
        </div>
        {/* <div className="w-full p-4 flex gap-4">
          <input
            className="px-4 py-2 flex-1 bg-white"
            placeholder="Search Pokemon..."
            value={search}
            onChange={searchHandler}
          />
          <button className="px-4 py-2 text-black font-medium bg-amber-300">
            Search
          </button>
        </div> */}
        <SearchInput value={search} onChange={searchHandler} />
      </div>
      <div className="flex-1 flex gap-4 bg-slate-200 p-4">
        {/* <div className="grid grid-cols-4 gap-4 flex-1 overflow-auto">
          {/* Card */}
          {/* {filteredPokemonList.length > 0 ? (
            filteredPokemonList.map((pokemon) => {
              return (
                <div
                  onClick={() => selectPokemonHandler(pokemon)}
                  key={pokemon.id}
                  className="h-32 shadow-2xs text-xl font-bold p-6 bg-white cursor-pointer hover:bg-amber-500 hover:text-white"
                >
                  <h2>{pokemon.name}</h2>
                </div>
              );
            })
          ) : (
            <p>No Pokemon Found</p>
          )}
        </div> */} 

        {/* {selectedPokemon ? (
          <div className="bg-white min-w-96 p-4">
            <img src="" className="aspect-square w-full" alt="" />
            <p className="text-lg font-medium">{selectedPokemon.name}</p>
            <p>{selectedPokemon.id}</p>
            <button
              onClick={removeSelectedPokemonHandler}
              className="bg-red-500 text-white px-2 mt-2 cursor-pointer"
            >
              Deselect
            </button>
          </div>
        ) : null} */}
    

     {isLoading ? ( 
        <p>Pokemon Loading...</p>
        ) : (

       <>
        <PokemonList
        isLoading ={isLoading}
          list={filteredPokemonList}
          onClickCard={selectPokemonHandler}
        />
        <PokemonViewer
        isLoadingPokemon= {isLoadingPokemon}
          pokemon={selectedPokemon}
          onRemove={removeSelectedPokemonHandler}
        />
        </>
        )}
      </div>
    </div>
  );
};
export default App;