import { useState } from "react";
import type { Pokemon } from "../types/pokemon";
import DeleteConfirmModal from "./DeleteConfirmModal";
import EditPokemonModal from "./EditPokemonModal";

type Props = {
  data: Pokemon[] | undefined;
  confirmDelete: (id: string) => void;
  confirmEdit?: (pokemon: Pokemon) => void;
  isLoading?: boolean;
  isError?: boolean;
};

const PokemonList = ({
  data,
  confirmDelete,
  confirmEdit,
  isLoading,
  isError,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEditPokemon, setSelectedEditPokemon] =
    useState<Pokemon | null>(null);

  const handleEditClick = (pokemon: Pokemon) => {
    setSelectedEditPokemon(pokemon);
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedEditPokemon || !confirmEdit) {
      setIsEditModalOpen(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const updatedPokemon: Pokemon = {
      ...selectedEditPokemon,
      name: formData.get("name")?.toString() || selectedEditPokemon.name,
      type: formData.get("type")?.toString() || selectedEditPokemon.type,
      level:
        parseInt(formData.get("level")?.toString() || "1") ||
        selectedEditPokemon.level,
      imageUrl:
        formData.get("imageUrl")?.toString() || selectedEditPokemon.imageUrl,
    };

    confirmEdit(updatedPokemon);
    setIsEditModalOpen(false);
  };

  const handleDeleteClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    if (selectedPokemon) {
      confirmDelete(selectedPokemon.id);
    }
    setIsModalOpen(false);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center p-10">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      );
    }

    if (data?.length === 0) {
      return (
        <div className="text-center py-10">
          <p className="text-lg text-base-content/70">No Pokémon found.</p>
        </div>
      );
    }

    if (isError) {
      return (
        <div role="alert" className="alert alert-error alert-soft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Failed to load Pokémon. Please try again.</span>
        </div>
      );
    }

    return (
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
          {data?.map((pokemon) => (
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
                  <button
                    className="btn btn-square btn-ghost btn-sm text-info"
                    onClick={() => handleEditClick(pokemon)}
                  >
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

                  <button
                    className="btn btn-square btn-ghost btn-sm text-error"
                    onClick={() => handleDeleteClick(pokemon)}
                  >
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
    );
  };

  return (
    <section className="card bg-base-100">
      <div className="overflow-x-auto">
        {renderContent()}
      </div>

      <DeleteConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pokemonName={selectedPokemon?.name || ""}
        onConfirm={handleConfirm}
      />

      <EditPokemonModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        pokemon={selectedEditPokemon}
        onSubmit={handleEditSubmit}
      />
    </section>
  );
};

export default PokemonList;
