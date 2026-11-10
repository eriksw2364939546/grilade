import { Link } from "react-router-dom";
import "./MentionsLegalesPage.scss";

const MentionsLegalesPage = () => {
  return (
    <div className="legal-page">
      <div className="container">
        {/* Кнопка возврата на главную */}
        <Link to="/" className="back-link">
          ← Retour à l'accueil
        </Link>

        {/* Заголовок */}
        <div className="legal-header">
          <span className="legal-subtitle">Informations Réglementaires</span>
          <h1 className="legal-title">Mentions Légales</h1>
          <div className="legal-line"></div>
          <p className="legal-update">Dernière mise à jour : 31 juillet 2026</p>
        </div>

        {/* Основной контент */}
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Éditeur du site</h2>
            <p>
              Le présent site est édité par{" "}
              <strong>Grillade Chez Le Sang</strong>, spécialisé dans la
              restauration et les grillades.
            </p>
            <ul>
              <li>
                <strong>Nom commercial :</strong> Grillade Chez Le Sang
              </li>
              <li>
                <strong>Adresse :</strong> 210 Av. de la Rose, 13190 Marseille,
                France
              </li>
              <li>
                <strong>Téléphone :</strong> +33 7 59 96 96 74
              </li>
              <li>
                <strong>Directeur de la publication :</strong> Grillade Chez Le
                Sang
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. Hébergement</h2>
            <p>Le site est hébergé par UAhosting.</p>
            <ul>
              <li>
                <strong>Hébergeur :</strong> UAhosting (Dlab)
              </li>
              <li>
                <strong>Site web :</strong> uahosting.com.ua
              </li>
              <li>
                <strong>Adresse :</strong> 79008, Lviv, rue Valova 14, Ukraine
              </li>
              <li>
                <strong>Email :</strong> info@uahosting.com.ua
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments présents sur ce site (textes, images,
              logo, mise en page) est, sauf mention contraire, la propriété de
              Grillade Chez Le Sang ou de ses partenaires. Toute reproduction,
              représentation, modification ou diffusion, totale ou partielle,
              sans autorisation préalable est interdite et pourrait constituer
              une contrefaçon au sens des articles L.335-2 et suivants du Code
              de la propriété intellectuelle.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Données personnelles</h2>
            <p>
              Le traitement des données personnelles collectées via le
              formulaire de contact ou de commande de ce site est décrit dans
              notre politique de confidentialité.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Responsabilité</h2>
            <p>
              Grillade Chez Le Sang s'efforce d'assurer l'exactitude et la mise
              à jour des informations diffusées sur ce site, mais ne peut
              garantir l'exhaustivité ou l'absence d'erreurs. Grillade Chez Le
              Sang ne saurait être tenu responsable des dommages directs ou
              indirects résultant de l'accès ou de l'utilisation de ce site, ni
              du contenu de sites tiers accessibles via des liens hypertextes
              présents sur ce site.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En
              cas de litige et à défaut de résolution amiable, les tribunaux
              français seront seuls compétents.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Contact</h2>
            <p>
              Pour toute question relative au site, vous pouvez nous contacter
              par téléphone au <a href="tel:0759969674">07 59 96 96 74</a> ou
              directement au restaurant situé au{" "}
              <strong>210 Av. de la Rose, 13013 Marseille</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegalesPage;
