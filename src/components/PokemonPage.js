import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, [])

  const [searched, setSearched] = useState('')

  function renderSearched(data) {
    setSearched(data)
  }

  const filteredPokemon = pokemon.filter((item) => item.name.toLowerCase().includes(searched.toLowerCase()))

  function renderNew(newData) {
    setPokemon([...pokemon, newData])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm renderNew={renderNew}/>
      <br />
      <Search renderSearched={renderSearched}/>
      <br />
      <PokemonCollection pokemon={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
