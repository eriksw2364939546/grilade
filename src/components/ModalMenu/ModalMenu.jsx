import { useState } from "react";
import "./ModalMenu.scss";

const ModalMenu = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>

        {submitted ? (
          <div className="modal-success">
            <h3>Commande validée !</h3>
            <p>Merci ! Nous préparons votre commande avec soin.</p>
          </div>
        ) : (
          <>
            <h2 className="modal-title">Finaliser la commande</h2>
            <p className="modal-subtitle">
              Veuillez entrer vos coordonnées pour valider votre commande.
            </p>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>Nom complet</label>
                <input type="text" placeholder="Votre nom" required />
              </div>

              <div className="form-group">
                <label>Téléphone</label>
                <input type="tel" placeholder="06 12 34 56 78" required />
              </div>

              <div className="form-group">
                <label>Adresse de livraison</label>
                <textarea
                  placeholder="Votre adresse complète"
                  rows="3"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-commander modal-submit-btn">
                Confirmer la commande
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalMenu;
