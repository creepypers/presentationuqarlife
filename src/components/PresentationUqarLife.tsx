import React from 'react'
import './PresentationUqarLife.css'

interface PresentationUqarLifeProps {
  onDiscoverClick: () => void
}

const PresentationUqarLife: React.FC<PresentationUqarLifeProps> = ({ onDiscoverClick }) => {
  return (
    <div className="presentation-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">UQARLIVE</h1>
          <p className="hero-tagline">Application Mobile de Vie Étudiante</p>
          <p className="hero-description">
            Présentation Complète et Unifiée du Projet
          </p>
          <div className="hero-cta">
            <button className="cta-button" onClick={onDiscoverClick}>DÉCOUVRIR</button>
          </div>
        </div>
      </section>

      {/* Vue d'Ensemble */}
      <section className="message-section">
        <div className="message-content">
          <h2 className="message-title">VUE D'ENSEMBLE</h2>
          <div className="overview-grid">
            <div className="overview-item">
              <h3>Qu'est-ce qu'UqarLive ?</h3>
              <p>
                UqarLive est une <strong>application mobile complète</strong> développée pour la communauté universitaire de l'UQAR (Université du Québec à Rimouski). 
                Elle centralise et digitalise tous les aspects de la vie étudiante dans une interface moderne et intuitive.
              </p>
            </div>
            <div className="overview-item">
              <h3>Vision du Projet</h3>
              <blockquote>
                "Transformer l'expérience étudiante en créant une plateforme unifiée qui simplifie et enrichit la vie universitaire quotidienne."
              </blockquote>
            </div>
            <div className="overview-item">
              <h3>Objectifs Principaux</h3>
              <ul>
                <li><strong>Centraliser</strong> tous les services étudiants</li>
                <li><strong>Digitaliser</strong> les processus administratifs</li>
                <li><strong>Faciliter</strong> la communication entre étudiants</li>
                <li><strong>Moderniser</strong> l'expérience utilisateur</li>
                <li><strong>Optimiser</strong> la gestion des ressources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design & UX */}
      <section className="final-cta">
        <h2 className="section-title">DESIGN & EXPÉRIENCE UTILISATEUR</h2>
        <div className="design-content">
          <div className="logo-section">
            <div className="logo-container">
              <img 
                src="https://i.ibb.co/fY1Y82V4/IMG-20250816-034536.png" 
                alt="Logo UQARLIVE" 
                className="uqar-logo"
              />
            </div>
          </div>
          
          <div className="design-colors">
            <h3>Identité Visuelle UQAR</h3>
            <div className="color-palette">
              <div className="color-item">
                <div className="color-swatch" style={{backgroundColor: '#005499'}}></div>
                <span>Bleu principal : #005499</span>
              </div>
              <div className="color-item">
                <div className="color-swatch" style={{backgroundColor: '#00A1E4'}}></div>
                <span>Bleu accent : #00A1E4</span>
              </div>
              <div className="color-item">
                <div className="color-swatch" style={{backgroundColor: '#F8F9FA'}}></div>
                <span>Fond clair : #F8F9FA</span>
              </div>
              <div className="color-item">
                <div className="color-swatch" style={{backgroundColor: '#2C2C2C'}}></div>
                <span>Texte gris foncé : #2C2C2C</span>
              </div>
            </div>
          </div>
          
          <div className="design-principles">
            <h3>Principes de Design</h3>
            <ul>
              <li>Style arrondi avec ombres subtiles</li>
              <li>Responsive et adaptable</li>
              <li>Accessible et contrasté</li>
              <li>Intuitif et clair</li>
              <li>Moderne et attractif</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Problématique & Solution */}
      <section className="features-section">
        <h2 className="section-title">PROBLÉMATIQUE & SOLUTION</h2>
        <div className="problem-solution-grid">
          <div className="problem-section">
            <h3>Problèmes Identifiés</h3>
            <ul>
              <li>Fragmentation des services étudiants</li>
              <li>Processus manuels et chronophages</li>
              <li>Manque de communication entre associations</li>
              <li>Difficulté d'accès aux informations</li>
              <li>Gestion complexe des ressources (salles, livres)</li>
            </ul>
            
            <h4>Impact sur la Communauté</h4>
            <ul>
              <li>Perte de temps pour les étudiants</li>
              <li>Inefficacité des processus</li>
              <li>Manque de cohésion entre services</li>
              <li>Expérience utilisateur dégradée</li>
            </ul>
          </div>
          
          <div className="solution-section">
            <h3>Notre Solution</h3>
            <ul>
              <li>Application unifiée regroupant tous les services</li>
              <li>Interface intuitive accessible à tous</li>
              <li>Système de notifications en temps réel</li>
              <li>Gestion centralisée des ressources</li>
              <li>Communication fluide entre utilisateurs</li>
            </ul>
            
            <h4>Bénéfices Attendus</h4>
            <ul>
              <li><strong>Gain de temps</strong> : -40% sur les processus</li>
              <li><strong>Satisfaction</strong> : +85% d'amélioration</li>
              <li><strong>Efficacité</strong> : Centralisation des ressources</li>
              <li><strong>Modernisation</strong> : Expérience numérique</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Architecture Technique */}
      <section className="about-section">
        <h2 className="section-title">ARCHITECTURE TECHNIQUE</h2>
        <div className="clean-architecture-diagram">
          <div className="arch-title">
            <h3>CLEAN ARCHITECTURE</h3>
            <p>Architecture en 4 Couches Indépendantes</p>
          </div>
          
          <div className="arch-layers-container">
            <div className="arch-layer-ui">
              <div className="layer-header">
                <h4>UI LAYER</h4>
                <span className="layer-desc">Présentation</span>
              </div>
              <div className="layer-content">
                <div className="layer-item">Écrans Flutter</div>
                <div className="layer-item">Widgets</div>
                <div className="layer-item">Services UI</div>
                <div className="layer-item">Navigation</div>
              </div>
            </div>
            
            <div className="arch-arrow-down">↓</div>
            
            <div className="arch-layer-business">
              <div className="layer-header">
                <h4>BUSINESS LAYER</h4>
                <span className="layer-desc">Domaine</span>
              </div>
              <div className="layer-content">
                <div className="layer-item">Use Cases</div>
                <div className="layer-item">Entités</div>
                <div className="layer-item">Business Rules</div>
                <div className="layer-item">Validation</div>
              </div>
            </div>
            
            <div className="arch-arrow-down">↓</div>
            
            <div className="arch-layer-data">
              <div className="layer-header">
                <h4>DATA LAYER</h4>
                <span className="layer-desc">Données</span>
              </div>
              <div className="layer-content">
                <div className="layer-item">Repositories</div>
                <div className="layer-item">Data Sources</div>
                <div className="layer-item">Models</div>
                <div className="layer-item">Cache</div>
              </div>
            </div>
            
            <div className="arch-arrow-down">↓</div>
            
            <div className="arch-layer-core">
              <div className="layer-header">
                <h4>CORE LAYER</h4>
                <span className="layer-desc">Fondation</span>
              </div>
              <div className="layer-content">
                <div className="layer-item">Dependency Injection</div>
                <div className="layer-item">Thème & Utils</div>
                <div className="layer-item">Constants</div>
                <div className="layer-item">Helpers</div>
              </div>
            </div>
          </div>
          
          <div className="arch-principles">
            <h4>Principes de l'Architecture</h4>
            <div className="principles-grid">
              <div className="principle-item">
                <div className="principle-content">
                  <h5>Indépendance</h5>
                  <p>Chaque couche fonctionne indépendamment des autres, facilitant la maintenance et les tests</p>
                </div>
              </div>
              <div className="principle-item">
                <div className="principle-content">
                  <h5>Testabilité</h5>
                  <p>Architecture conçue pour permettre des tests unitaires et d'intégration faciles</p>
                </div>
              </div>
              <div className="principle-item">
                <div className="principle-content">
                  <h5>Maintenabilité</h5>
                  <p>Code organisé et structuré pour faciliter les modifications et améliorations</p>
                </div>
              </div>
              <div className="principle-item">
                <div className="principle-content">
                  <h5>Évolutivité</h5>
                  <p>Structure modulaire permettant l'ajout de nouvelles fonctionnalités facilement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités Principales */}
      <section className="tech-section">
        <h2 className="section-title">FONCTIONNALITÉS PRINCIPALES</h2>
        <div className="features-content">
          <div className="modules-section">
            <h3>10 Modules Principaux</h3>
            <div className="modules-grid">
              <div className="module-item">Gestion des Associations</div>
              <div className="module-item">Marketplace de Livres</div>
              <div className="module-item">Cantine Universitaire</div>
              <div className="module-item">Réservation de Salles</div>
              <div className="module-item">Messagerie Intégrée</div>
              <div className="module-item">Gestion des Utilisateurs</div>
              <div className="module-item">Administration</div>
              <div className="module-item">Événements</div>
              <div className="module-item">Actualités</div>
              <div className="module-item">Température</div>
            </div>
          </div>
          
          <div className="characteristics-section">
            <h3>Caractéristiques</h3>
            <ul>
              <li>Interface unifiée</li>
              <li>Fonctionnalités avancées et intuitives</li>
              <li>Gestion des rôles et permissions</li>
              <li>Notifications intelligentes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Modules Détaillés */}
      <section className="stats-section">
        <h2 className="section-title">MODULES DÉTAILLÉS</h2>
        <div className="modules-detail-grid">
          <div className="module-detail">
            <h3>GESTION DES ASSOCIATIONS</h3>
            <h4>Fonctionnalités Clés</h4>
            <ul>
              <li>Découverte des associations étudiantes</li>
              <li>Actualités en temps réel</li>
              <li>Événements et inscriptions</li>
              <li>Gestion des adhésions</li>
              <li>Profils détaillés des associations</li>
            </ul>
            <h4>Avantages</h4>
            <ul>
              <li>Visibilité améliorée des associations</li>
              <li>Communication facilitée</li>
              <li>Gestion simplifiée des membres</li>
              <li>Actualités centralisées</li>
            </ul>
          </div>

          <div className="module-detail">
            <h3>MARKETPLACE DE LIVRES</h3>
            <h4>Système Complet d'Échange</h4>
            <ul>
              <li>Échange et vente de manuels scolaires</li>
              <li>Filtres avancés par matière et année</li>
              <li>Transactions sécurisées</li>
              <li>Système de notation et avis</li>
              <li>Chat intégré</li>
            </ul>
            <h4>Innovations</h4>
            <ul>
              <li>Filtres intelligents</li>
              <li>Gestion de l'état des livres</li>
              <li>Recommandations automatiques</li>
              <li>Interface moderne et intuitive</li>
            </ul>
          </div>

          <div className="module-detail">
            <h3>CANTINE UNIVERSITAIRE</h3>
            <h4>Gestion Complète des Menus</h4>
            <ul>
              <li>Menus du jour dynamiques</li>
              <li>Horaires d'ouverture</li>
              <li>Informations nutritionnelles</li>
              <li>Gestion des plats</li>
              <li>Interface admin complète</li>
            </ul>
            <h4>Fonctionnalités Admin</h4>
            <ul>
              <li>Création et modification des menus</li>
              <li>Gestion des horaires</li>
              <li>Statistiques de consommation</li>
              <li>Modération du contenu</li>
            </ul>
          </div>

          <div className="module-detail">
            <h3>RÉSERVATION DE SALLES</h3>
            <h4>Système de Réservation Intelligent</h4>
            <ul>
              <li>Consultation des salles disponibles</li>
              <li>Réservation en temps réel</li>
              <li>Gestion des créneaux</li>
              <li>Historique des réservations</li>
              <li>Notifications</li>
            </ul>
            <h4>Avantages</h4>
            <ul>
              <li>Optimisation de l'utilisation des salles</li>
              <li>Réduction des conflits</li>
              <li>Gestion automatisée</li>
              <li>Interface intuitive</li>
            </ul>
          </div>

          <div className="module-detail">
            <h3>MESSAGERIE INTÉGRÉE</h3>
            <h4>Communication Sécurisée</h4>
            <ul>
              <li>Conversations privées</li>
              <li>Gestion des contacts</li>
              <li>Notifications push</li>
              <li>Interface intuitive</li>
              <li>Sécurité renforcée</li>
            </ul>
            <h4>Sécurité</h4>
            <ul>
              <li>Chiffrement des messages</li>
              <li>Gestion des permissions</li>
              <li>Modération automatique</li>
              <li>Historique sécurisé</li>
            </ul>
          </div>

          <div className="module-detail">
            <h3>ÉVÉNEMENTS</h3>
            <h4>Gestion Complète des Événements</h4>
            <ul>
              <li>Création et planification d'événements</li>
              <li>Calendrier interactif</li>
              <li>Inscriptions et gestion des participants</li>
              <li>Notifications automatiques</li>
              <li>Partage sur réseaux sociaux</li>
            </ul>
            <h4>Fonctionnalités Avancées</h4>
            <ul>
              <li>Géolocalisation des événements</li>
              <li>Système de rappels personnalisés</li>
              <li>Gestion des capacités et listes d'attente</li>
              <li>Statistiques de participation</li>
            </ul>
          </div>

          <div className="module-detail">
            <h3>ACTUALITÉS</h3>
            <h4>Centre d'Information Universitaire</h4>
            <ul>
              <li>Fil d'actualités en temps réel</li>
              <li>Catégorisation par thèmes</li>
              <li>Notifications push pour informations importantes</li>
              <li>Archivage et recherche</li>
              <li>Partage et commentaires</li>
            </ul>
            <h4>Contenu et Modération</h4>
            <ul>
              <li>Sources d'information vérifiées</li>
              <li>Modération automatique du contenu</li>
              <li>Personnalisation selon les intérêts</li>
              <li>Intégration avec les associations</li>
            </ul>
          </div>

          <div className="module-detail">
            <h3>TEMPÉRATURE</h3>
            <h4>Météo et Conditions Locales</h4>
            <ul>
              <li>Météo en temps réel pour le campus</li>
              <li>Prévisions à 7 jours</li>
              <li>Alertes météorologiques</li>
              <li>Conditions pour activités extérieures</li>
              <li>Historique des conditions</li>
            </ul>
            <h4>Intégration Intelligente</h4>
            <ul>
              <li>Recommandations d'activités selon la météo</li>
              <li>Notifications pour changements importants</li>
              <li>Données environnementales du campus</li>
              <li>Interface intuitive et responsive</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="tech-section">
        <h2 className="section-title">TECHNOLOGIES & DÉPENDANCES</h2>
        <div className="tech-content">
          <div className="tech-stack">
            <h3>Stack Technique</h3>
            <ul>
              <li><strong>Flutter 3.2.3+</strong></li>
              <li><strong>Dart 3.2.3+</strong></li>
              <li><strong>Material Design 3</strong></li>
              <li><strong>GetIt pour DI</strong></li>
              <li><strong>HTTP pour API REST</strong></li>
            </ul>
          </div>
          
          <div className="tech-dependencies">
            <h3>Dépendances Principales</h3>
            <ul>
              <li><strong>get_it</strong> (injection de dépendances)</li>
              <li><strong>http</strong> (API REST)</li>
              <li><strong>cupertino_icons</strong> (icônes iOS)</li>
              <li><strong>flutter_lints</strong> (qualité du code)</li>
            </ul>
          </div>
          
          <div className="tech-architecture">
            <h3>Architecture des Données</h3>
            <ul>
              <li>Modèles structurés</li>
              <li>Repositories abstraits</li>
              <li>Services métier</li>
              <li>Cache local pour performance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Structure du Code */}
      <section className="about-section">
        <h2 className="section-title">STRUCTURE DU CODE</h2>
        <div className="structure-content">
          <div className="structure-organization">
            <h3>Organisation Modulaire</h3>
            <div className="architecture-diagram">
              <div className="arch-layer presentation-layer">
                <h4>PRESENTATION</h4>
                <div className="layer-components">
                  <span>Écrans</span>
                  <span>Services</span>
                  <span>Widgets</span>
                </div>
              </div>
              <div className="arch-arrow">↓</div>
              <div className="arch-layer domain-layer">
                <h4>DOMAIN</h4>
                <div className="layer-components">
                  <span>Entités</span>
                  <span>Repositories</span>
                  <span>Use Cases</span>
                </div>
              </div>
              <div className="arch-arrow">↓</div>
              <div className="arch-layer data-layer">
                <h4>DATA</h4>
                <div className="layer-components">
                  <span>Models</span>
                  <span>Datasources</span>
                  <span>Repositories</span>
                </div>
              </div>
              <div className="arch-arrow">↓</div>
              <div className="arch-layer core-layer">
                <h4>CORE</h4>
                <div className="layer-components">
                  <span>DI</span>
                  <span>Thème</span>
                  <span>Utils</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="structure-patterns">
            <h3>Patterns Utilisés</h3>
            <ul>
              <li>Repository Pattern</li>
              <li>Service Locator</li>
              <li>Observer Pattern</li>
              <li>Factory Pattern</li>
              <li>Builder Pattern</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Impact sur la Communauté */}
      <section className="stats-section">
        <h2 className="section-title">IMPACT SUR LA COMMUNAUTÉ UQAR</h2>
        <div className="impact-grid">
          <div className="impact-item">
            <h3>Simplification</h3>
            <p>de la vie étudiante</p>
          </div>
          <div className="impact-item">
            <h3>Digitalisation</h3>
            <p>des processus</p>
          </div>
          <div className="impact-item">
            <h3>Amélioration</h3>
            <p>de la communication</p>
          </div>
          <div className="impact-item">
            <h3>Modernisation</h3>
            <p>de l'expérience universitaire</p>
          </div>
          <div className="impact-item">
            <h3>Centralisation</h3>
            <p>des services</p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="final-cta">
        <h2 className="section-title">CONCLUSION</h2>
        <div className="conclusion-content">
          <p>
            UQARLIVE représente une <strong>révolution numérique</strong> pour la communauté universitaire de l'UQAR. 
            En combinant une architecture technique moderne, un design épuré et des fonctionnalités complètes, 
            cette application transforme l'expérience étudiante en une expérience fluide, intuitive et centralisée.
          </p>
          <div className="conclusion-stats">
            <div className="stat-item">
              <span className="stat-number">10</span>
              <span className="stat-label">Modules Principaux</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Couches Architecture</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">-40%</span>
              <span className="stat-label">Gain de Temps</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">+85%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PresentationUqarLife
