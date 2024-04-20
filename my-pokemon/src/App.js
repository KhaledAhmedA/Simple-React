import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPageURL, setCurrentPageURL] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  useEffect(() => {
    let cancel;
    setLoading(true);
    axios.get(currentPageURL, {
      cancelToken: new axios.CancelToken((c) => { cancel = c }),
    })
      .then(res => {
        setPokemon(res.data.results.map(result => result.name));
        setLoading(false);
        setNextPage(res.data.next);
        setPrevPage(res.data.previous);
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      }
      )

    return () => { cancel() }
    // .then(e => console.log(e))
  }
    , [currentPageURL]);

  if (loading) return "Loading ...";

  function goToNextPage() {
    setCurrentPageURL(nextPage);
  }

  function goToPrevPage() {
    setCurrentPageURL(prevPage);
  }

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        goToNextPage={nextPage ? goToNextPage : null}
        goToPrevPage={prevPage ? goToPrevPage : null}
      />
    </>
  );
}

export default App;
