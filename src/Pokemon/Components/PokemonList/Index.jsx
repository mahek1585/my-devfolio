import React from 'react'

const PokemonList = ({list,onClickCard ,isLoading =false}) => {
  return (
    <div className="flex-1">
     <div className=" grid grid-cols-4 gap-4  overflow-auto">
              {/* cards */}
              {list.length > 0 || isLoading ? (
                list.map((pokemon) => {
                return (
                  <div 
                    // onClick={()=>selectPokemonHandler(pokemon)}
                    onClick={()=>onClickCard(pokemon)}
                    key={pokemon.id} 
                    className="h-22 shadow-2xs p-6 bg-white font-bold text-xl cursor-pointer hover:bg-amber-500 hover:text-white">
                    <h2>{pokemon.name}</h2>
                  </div>
                );
                })
               ) : (
                  <p>No Pokemon Found</p>
                )}

             {/* <div className=" shadow-2xs p-6 bg-white font-bold text-xl cursor-pointer hover:bg-amber-500 hover:text-white">
              <h2>name</h2>
            </div>
             <div className=" shadow-2xs p-6 bg-white font-bold text-xl cursor-pointer hover:bg-amber-500 hover:text-white">
              <h2>name</h2>
            </div>
             <div className=" shadow-2xs p-6 bg-white font-bold text-xl cursor-pointer hover:bg-amber-500 hover:text-white">
              <h2>name</h2>
            </div>
            <div className=" shadow-2xs p-6 bg-white font-bold text-xl cursor-pointer hover:bg-amber-500 hover:text-white">
              <h2>name</h2>
            </div> */}
 
        </div>
        </div>
  )
}

export default PokemonList
