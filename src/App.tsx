import { useState } from "react";
import { useCreatePokemon, usePokemons } from "./hooks/usePokemons";

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

        <section className="card bg-base-100">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead className="bg-base-200/50">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Level</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pokemons?.map((pokemon) => (
                  <tr
                    key={pokemon.id}
                    className="hover:bg-base-200/20 transition-colors"
                  >
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 bg-base-300">
                          <img src={pokemon.imageUrl} alt={pokemon.name} />
                        </div>
                      </div>
                    </td>
                    <td>{pokemon.name}</td>
                    <td>{pokemon.type}</td>
                    <td>{pokemon.level}</td>
                    <td className="text-right">
                      <div className="flex justify-end gap-1">
                        <button className="btn btn-square btn-ghost btn-sm text-info">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </button>

                        <button className="btn btn-square btn-ghost btn-sm text-error">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
