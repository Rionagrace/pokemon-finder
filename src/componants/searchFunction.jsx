import Results from "./Results";
import SearchBar from "./SearchBar";
import { useState } from "react";

function SearchFunction() {
	const [newPokemon, setNewPokemon] = useState("charmander");
	return (
		<>
			<SearchBar setNewPokemon={setNewPokemon} />
			<Results newPokemon={newPokemon} />
		</>
	);
}

export default SearchFunction;
