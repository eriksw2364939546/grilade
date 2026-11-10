import { Link } from "react-router-dom";
import "./PrivacyPolicyPage.scss";

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-page">
      <div className="container">
        {/* Кнопка возврата на главную */}
        <Link to="/" className="back-link">
          ← Retour à l'accueil
        </Link>

        {/* Заголовок */}
        <div className="privacy-header">
          <span className="privacy-subtitle">Protection des données</span>
          <h1 className="privacy-title">Politique de confidentialité</h1>
          <div className="privacy-line"></div>
          <p className="privacy-update">
            Dernière mise à jour : 31 juillet 2026
          </p>
        </div>

        {/* Основной контент */}
        <div className="privacy-content">
          <p className="privacy-intro">
            <strong>Grillade Chez Le Sang</strong> attache une grande importance
            à la protection de vos données personnelles. Cette page explique
            quelles données sont collectées via ce site, pourquoi, et comment
            vous pouvez exercer vos droits.
          </p>

          <section className="privacy-section">
            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données collectées sur ce site
              est :
            </p>
            <ul>
              <li>
                <strong>Établissement :</strong> Grillade Chez Le Sang
              </li>
              <li>
                <strong>Adresse :</strong> 210 Av. de la Rose, 13013 Marseille,
                France
              </li>
              <li>
                <strong>Téléphone :</strong> +33 7 59 59 96 74 / +33 6 15 73 95
                74
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>2. Données collectées</h2>
            <p>
              Lorsque vous utilisez le formulaire de contact ou de commande de
              ce site, les données suivantes peuvent être collectées :
            </p>
            <ul>
              <li>Nom et Prénom</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone</li>
              <li>Message libre / Détails de la commande</li>
            </ul>
            <p>
              Ces informations sont utilisées uniquement pour répondre à vos
              demandes ou faciliter vos commandes. Elles ne sont pas vendues ni
              transmises à des tiers à des fins commerciales.
            </p>
          </section>

          <section className="privacy-section">
            <h2>3. Finalités du traitement</h2>
            <p>Les données collectées via ce site sont utilisées pour :</p>
            <ul>
              <li>
                Répondre à vos demandes de renseignements ou de réservation ;
              </li>
              <li>Assurer la prise de commande et le suivi de livraison ;</li>
              <li>Respecter, le cas échéant, nos obligations légales.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>4. Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies de suivi publicitaire ou de
              profilage. Seuls des cookies techniques strictement nécessaires au
              bon fonctionnement de la navigation peuvent être déposés.
            </p>
          </section>

          <section className="privacy-section">
            <h2>5. Durée de conservation</h2>
            <p>
              Vos données personnelles ne sont conservées que pour la durée
              strictement nécessaire à la gestion de la relation client ou pour
              répondre à nos obligations légales.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés, vous disposez d'un
              droit d'accès, de rectification, de suppression et d'opposition
              concernant vos données. Vous pouvez également introduire une
              réclamation auprès de la CNIL (
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.cnil.fr
              </a>
              ).
            </p>
          </section>

          <section className="privacy-section">
            <h2>7. Contact</h2>
            <p>
              Pour exercer vos droits ou pour toute question relative à cette
              politique de confidentialité, vous pouvez nous contacter
              directement par téléphone au{" "}
              <a href="tel:0759599674">07 59 59 96 74</a> ou nous rendre visite
              au <strong>210 Av. de la Rose, 13013 Marseille</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
