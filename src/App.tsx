import { useState } from "react";
import { useCreatePokemon, usePokemons } from "./hooks/usePokemons";
import PokemonList from "./components/PokemonList";

const App = () => {
  const { data: pokemons } = usePokemons();
  const { mutate: createPokemon } = useCreatePokemon();

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonLevel, setPokemonLevel] = useState(1);
  const [pokemonImageUrl, setPokemonImageUrl] = useState("");

  const handleSubmit = () => {
    if (!pokemonName.trim()) return;
    createPokemon({
      name: pokemonName,
      type: pokemonType,
      level: pokemonLevel,
      imageUrl: pokemonImageUrl,
    });
    setPokemonName("");
    setPokemonType("");
    setPokemonLevel(1);
    setPokemonImageUrl("");
  };

  return (
    <div className="min-h-screen bg-base-300">
      <main className="max-w-6xl mx-auto p-4 md:p-8 space-y-6">
        <section className="card bg-base-100">
          <div className="card-body p-5 md:p-8">
            <h2 className="text-xl font-bold mb-4">Add New Pokémon</h2>

            <div className="flex flex-col lg:flex-row gap-4 items-end">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                <div>
                  <label className="label-text">Name</label>
                  <input
                    className="input w-full"
                    placeholder="Hypno"
                    value={pokemonName}
                    onChange={(e) => setPokemonName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="label-text">Type</label>
                  <input
                    className="input w-full"
                    placeholder="Psychic"
                    value={pokemonType}
                    onChange={(e) => setPokemonType(e.target.value)}
                  />
                </div>
                <div>
                  <label className="label-text">Level</label>
                  <input
                    className="input w-full"
                    type="number"
                    value={pokemonLevel}
                    onChange={(e) =>
                      setPokemonLevel(parseInt(e.target.value) || 1)
                    }
                  />
                </div>
                <div>
                  <label className="label-text">Image URL</label>
                  <input
                    className="input w-full"
                    value={pokemonImageUrl}
                    onChange={(e) => setPokemonImageUrl(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="btn btn-primary w-full lg:w-auto px-10"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </section>

        <PokemonList data={pokemons} />
      </main>
    </div>
  );
};

export default App;
