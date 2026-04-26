import { useCreatePokemon, usePokemons } from "./hooks/usePokemons";
import PokemonList from "./components/PokemonList";
import PokemonForm from "./components/PokemonForm";
import Navbar from "./components/Navbar";

const App = () => {
  const { data: pokemons } = usePokemons();
  const { mutate: createPokemon } = useCreatePokemon();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    if (
      !formData.get("name") ||
      !formData.get("type") ||
      !formData.get("imageUrl")
    )
      return;
    createPokemon({
      name: formData.get("name")?.toString() || "",
      type: formData.get("type")?.toString() || "",
      level: parseInt(formData.get("level")?.toString() || "1") || 1,
      imageUrl: formData.get("imageUrl")?.toString() || "",
    });
  };

  const handleDelete = (id: string) => {
    console.log("Siliniyor:", id);
  };

  return (
    <div className="min-h-screen bg-base-300">
      <Navbar />
      <main className="max-w-6xl mx-auto p-4 md:p-8 space-y-6">
        <PokemonForm handleSubmit={handleSubmit} />
        <PokemonList data={pokemons} confirmDelete={handleDelete} />
      </main>
    </div>
  );
};

export default App;
