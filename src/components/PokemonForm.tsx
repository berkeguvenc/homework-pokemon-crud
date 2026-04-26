type Props = {
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
};
const PokemonForm = ({ handleSubmit }: Props) => {
  console.log("Rendering PokemonForm");
  return (
    <section className="card bg-base-100">
      <div className="card-body p-5 md:p-8">
        <h2 className="text-xl font-bold mb-4">Add New Pokémon</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <div>
                <label className="label-text">Name</label>
                <input
                  className="input w-full"
                  placeholder="Hypno"
                  name="name"
                />
              </div>
              <div>
                <label className="label-text">Type</label>
                <input
                  className="input w-full"
                  placeholder="Psychic"
                  name="type"
                />
              </div>
              <div>
                <label className="label-text">Level</label>
                <input className="input w-full" type="number" name="level" />
              </div>
              <div>
                <label className="label-text">Image URL</label>
                <input
                  className="input w-full"
                  placeholder="https://..."
                  name="imageUrl"
                />
              </div>
            </div>
            <button className="btn btn-primary w-full lg:w-auto px-10">
              Add
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PokemonForm;
