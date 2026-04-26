import React from "react";
import PokemonForm from "./PokemonForm";
import type { Pokemon } from "../types/pokemon";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  pokemon: Pokemon | null;
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
};

const EditPokemonModal = ({ isOpen, onClose, pokemon, onSubmit }: Props) => {
  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box p-0">
        {pokemon && (
          <PokemonForm
            isEdit
            initialData={pokemon}
            handleSubmit={onSubmit}
            onCancel={onClose}
          />
        )}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
};

export default EditPokemonModal;
