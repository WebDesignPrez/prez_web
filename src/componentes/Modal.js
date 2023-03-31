function Modal({ selectedPerson, onClose }) {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <img src={selectedPerson.imgSrc} alt={selectedPerson.name} />
          <p>{selectedPerson.description}</p>
        </div>
      </div>
    );
  }
  export default Modal