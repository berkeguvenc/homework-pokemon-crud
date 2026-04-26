type Props = {
  isOpen: boolean;
  onClose: () => void;
  pokemonName: string;
  onConfirm: () => void;
};

const DeleteConfirmModal = ({
  isOpen,
  onClose,
  pokemonName,
  onConfirm,
}: Props) => {
  return (
    <dialog
      className={`modal modal-bottom sm:modal-middle ${isOpen ? "modal-open" : ""}`}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg text-error">Warning!</h3>
        <p className="py-4">
          Are you sure you want to delete <strong>{pokemonName}</strong>?
        </p>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-error" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default DeleteConfirmModal;
