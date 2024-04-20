import React from "react";

const PokemonList = ({ pokemon }) => {



    return (
        <div>
            {
                pokemon.map(pok => <div key={pok}>{pok}</div>)
            }
        </div>
    )
}

export default PokemonList;