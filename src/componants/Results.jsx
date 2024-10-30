import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import { getPokemonByGeneration } from "../api";

function Results(props) {
	const { newPokemon } = props;

	const [pokemon, setPokemon] = useState("");
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${newPokemon}`)
			.then((response) => {
				return response.json();
			})
			.then((pokemonData) => {
				setPokemon(pokemonData);
				setLoaded(true);
			});
	}, [newPokemon]);

	if (loaded) {
		return (
			<>
			<section className="searchResultGrid">
				<Card className="searchResultCard"  >
						<Card.Header>{pokemon.name}</Card.Header>
            <Card.Body className="cardBody">
						<Card.Img variant="top" src={pokemon.sprites.front_default} style={{ width: "100%" }} />
					</Card.Body>
				</Card>
				</section>
			</>
		);
	} else if (newPokemon) {
		return (
			<>
				<p>Loading...</p>
			</>
		);
	}
}

export default Results;
