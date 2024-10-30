// import submitPokemon from "../utils/util-functions"
import { useState } from "react";


function SearchBar(props){

  const {setNewPokemon} = props

  function submitPokemon(event) {
    event.preventDefault();
    setNewPokemon(event.target.searchBar.value)
  }

  return (<>
  <form onSubmit={submitPokemon}>
    <label className="searchLabel" htmlFor="searchBar">Search for a Pokemon</label>
    <input id="searchBar" type="text"/>
    <button type="submit">Submit</button>
  </form>
  </>)
}

export default SearchBar 