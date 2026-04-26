import React, { useState, useEffect } from "react";
import PokemonForm from "./PokemonForm";
import type { Pokemon } from "../types/pokemon";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  pokemon: Pokemon | null;
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
};

const EditPokemonModal = ({ isOpen, onClose, pokemon, onSubmit }: Props) => {
  const [hasChanges, setHasChanges] = useState(false);

  // ASK ?
  useEffect(() => {
    setHasChanges(false);
  }, [pokemon]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const form = (e.target as HTMLElement).closest("form");

    const formData = new FormData(form);
    const changed =
      formData.get("name") !== pokemon.name ||
      formData.get("type") !== pokemon.type ||
      formData.get("level") !== String(pokemon.level) ||
      formData.get("imageUrl") !== pokemon.imageUrl;

    setHasChanges(changed);
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box p-0" onChange={handleChange}>
        {pokemon && (
          <PokemonForm
            isEdit
            initialData={pokemon}
            handleSubmit={onSubmit}
            onCancel={onClose}
            isDisabled={!hasChanges}
          />
        )}
      </div>
    </dialog>
  );
};

export default EditPokemonModal;
