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
        <h3 className="font-bold text-lg text-error">Dikkat!</h3>
        <p className="py-4">
          <strong>{pokemonName}</strong> isimli pokemon'u silmek istediğinize
          emin misiniz?
        </p>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Vazgeç
          </button>
          <button className="btn btn-error" onClick={onConfirm}>
            Sil
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default DeleteConfirmModal;
