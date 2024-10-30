import { useEffect, useState } from "react";
import { getPokemonByGeneration, getPokemonData } from "../api";
import Card from "react-bootstrap/Card";

function IdResults(props) {
	const { newId } = props;

	const [loaded, setLoaded] = useState(false);
	const [pokemon, setPokemon] = useState([]);
	const [objectPokemon, setObjectPokemon] = useState([]);

	useEffect(() => {
		getPokemonByGeneration(newId).then((results) => {
			setLoaded(true);
			setPokemon(results);
		});
	}, [newId]);

	function extractId(url) {
		return url.split("/")[6];
	}

	if (loaded) {
		return (
      <section className="container">
      {pokemon.map((element) => {
			const pokemonId = extractId(element.url);
			return (
				<>
					<Card className="containerItem">
						<Card.Header>{element.name}</Card.Header>
						<Card.Body>
							<Card.Text>{`ID: ${pokemonId}`}</Card.Text>
							<Card.Img
								variant="top"
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
								style={{ width: "100%" }}
							/>
						</Card.Body>
					</Card>
				</>
			);
		})}
    </section>
  )
    
	} else {
		return (
			<>
				<p>Loading...</p>
			</>
		);
	}
}

export default IdResults;
