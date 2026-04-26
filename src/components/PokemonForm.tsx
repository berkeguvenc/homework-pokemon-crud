import React from "react";
import type { Pokemon } from "../types/pokemon";

type Props = {
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
  isEdit?: boolean;
  initialData?: Omit<Pokemon, "id">;
  onCancel?: () => void;
  isDisabled?: boolean;
};

const PokemonForm = ({
  handleSubmit,
  isEdit = false,
  initialData,
  onCancel,
  isDisabled = false,
}: Props) => {
  return (
    <section className={"card bg-base-100"}>
      <div className={"card-body p-5 md:p-8"}>
        <h2 className="text-xl font-bold mb-4">
          {!isEdit ? "Add New Pokémon" : "Edit Pokémon"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className={"flex flex-col lg:flex-row gap-4 items-end"}>
            <div
              className={
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
              }
            >
              <div>
                <label className="label-text">Name</label>
                <input
                  className="input w-full"
                  placeholder="Hypno"
                  name="name"
                  defaultValue={initialData?.name}
                  required
                />
              </div>
              <div>
                <label className="label-text">Type</label>
                <input
                  className="input w-full"
                  placeholder="Psychic"
                  name="type"
                  defaultValue={initialData?.type}
                  required
                />
              </div>
              <div>
                <label className="label-text">Level</label>
                <input
                  className="input w-full"
                  type="number"
                  placeholder="0"
                  name="level"
                  defaultValue={initialData?.level}
                  required
                />
              </div>
              <div>
                <label className="label-text">Image URL</label>
                <input
                  className="input w-full"
                  type="url"
                  placeholder="https://..."
                  name="imageUrl"
                  defaultValue={initialData?.imageUrl}
                  required
                />
              </div>
            </div>
            <div
              className={`flex gap-2 ${!isEdit ? "w-full lg:w-auto" : "mt-4 justify-end"}`}
            >
              {isEdit && onCancel && (
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={onCancel}
                >
                  Cancel
                </button>
              )}
              <button
                className={`btn btn-primary ${!isEdit ? "w-full lg:w-auto px-10" : "px-8"}`}
                disabled={isDisabled}
              >
                {!isEdit ? "Add" : "Update"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PokemonForm;
