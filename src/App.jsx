import React, { useEffect, useState } from "react";
// Components
// import PokemonList from "./Pokemon/components/PokemonList";
 import PokemonViewer from "./Pokemon/components/PokemonViewer";
import SearchInput from "./Pokemon/Components/SearchInput";
import PokemonList from "./Pokemon/Components/PokemonList/Index";
import usePokeHook from "./Pokemon/hooks/UsePokeHook";

const App = () => {
  const {
    // states
    search,
    isLoading,
    list,
    isLoadingPokemon,
    selectedPokemon,
    // functions and handlers
    onSearch,
    onClickPokemonCard,
    removePokemon,
  } = usePokeHook();

 
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-slate-200 ">
        <div className="py-4 bg-amber-300">
          <h1 className="text-4xl text-center text-amber-950">Pokemon List</h1>
        </div>
        <SearchInput value={search} onChange={onSearch} />
      </div>
      <div className="flex-1 flex gap-4 bg-slate-200 p-4 overflow-auto ">
        {isLoading ? (
          <p>Pokemon loading....</p>
        ) : (
          <>
            <PokemonList
              isLoading={isLoading}
              list={list}
              onClickCard={onClickPokemonCard}
            />
            <PokemonViewer
              isLoading={isLoadingPokemon}
              pokemon={selectedPokemon}
              onRemove={removePokemon}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;