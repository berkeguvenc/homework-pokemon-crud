import { usePokemons } from "./hooks/usePokemons";

const App = () => {
  const { data: pokemons } = usePokemons();
  return (
    <ul>
      {pokemons?.map((pokemon) => (
        <li key={pokemon.id}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default App;
