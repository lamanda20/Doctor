# Portfolio Médical - Dr. Marie Dubois

Un site web professionnel pour une médecin généraliste avec système de prise de rendez-vous en ligne.

## 🩺 Aperçu du Projet

Ce portfolio médical moderne présente les services d'une docteure généraliste avec :
- **Présentation professionnelle** de la médecin et de son expertise
- **Système de prise de rendez-vous** en ligne complet
- **Catalogue des services** médicaux proposés
- **Témoignages patients** vérifiés
- **Informations de contact** et plan d'accès
- **Panneau d'administration** pour gérer les rendez-vous
- **Design responsive** adapté à tous les appareils

## 🚀 Technologies Utilisées

- **React 18** avec TypeScript
- **Vite** pour le build et le développement
- **CSS Modules** pour les styles
- **React Hook Form** pour la gestion des formulaires
- **Lucide React** pour les icônes
- **Date-fns** pour la gestion des dates
- **EmailJS** (optionnel) pour l'envoi d'emails
- **LocalStorage** pour la persistance des données

## 📋 Fonctionnalités

### Pages et Sections
- ✅ **Page d'accueil** avec hero section
- ✅ **À propos** - Présentation de la docteure
- ✅ **Services** - Catalogue des consultations
- ✅ **Expertise** - Domaines de spécialisation
- ✅ **Prise de rendez-vous** - Système de réservation interactif
- ✅ **Témoignages** - Avis patients
- ✅ **Contact** - Coordonnées et localisation
- ✅ **Admin Panel** - Gestion des rendez-vous (Ctrl+Shift+A)

### Système de Rendez-vous
- 📅 **Calendrier interactif** avec sélection de dates
- ⏰ **Créneaux horaires** disponibles en temps réel
- 📧 **Notifications email** automatiques (simulation)
- 📋 **Formulaire complet** avec validation
- 💾 **Sauvegarde locale** des rendez-vous
- ✅ **Confirmation/refus** des demandes
- 🔔 **Système de notifications** pour le docteur

### Fonctionnalités Techniques
- 📱 **Design responsive** (mobile, tablette, desktop)
- ♿ **Accessibilité** (navigation clavier, lecteurs d'écran)
- 🎨 **Animations fluides** et transitions
- 📊 **Optimisé SEO** avec meta tags appropriées
- 🔒 **Formulaires sécurisés** avec validation TypeScript
- ⚡ **Performance optimisée** avec Vite
- 🗄️ **Persistance des données** avec localStorage

## 🛠️ Installation et Développement

### Prérequis
- Node.js 16+ 
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone <repository-url>
cd doctor

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Scripts Disponibles
```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run preview      # Aperçu du build
npm run lint         # Vérification ESLint
```

## 📅 Système de Rendez-vous

### Fonctionnement Actuel (Version Demo)
Le système fonctionne actuellement en mode **démonstration** avec :
- **Stockage local** : Les rendez-vous sont sauvegardés dans le localStorage du navigateur
- **Emails simulés** : Les notifications sont affichées dans la console du navigateur
- **Gestion basique** : Confirmation/annulation des rendez-vous via le panel admin

### Accès au Panel d'Administration
Pour accéder au panel d'administration :
1. Appuyez sur **Ctrl + Shift + A** sur la page principale
2. Ou modifiez l'URL pour inclure `#admin`
3. Le panel permet de :
   - Voir tous les rendez-vous demandés
   - Confirmer ou refuser les demandes
   - Filtrer par statut (en attente, confirmé, annulé)

### Configuration pour Production

#### Option 1: EmailJS (Recommandé pour commencer)
```typescript
// Dans src/services/emailService.ts
const EMAILJS_CONFIG = {
  SERVICE_ID: 'votre_service_id',     // Remplacer
  TEMPLATE_ID: 'votre_template_id',   // Remplacer
  PUBLIC_KEY: 'votre_public_key'      // Remplacer
};
```

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurez un service email (Gmail, Outlook, etc.)
3. Créez des templates pour :
   - Demande de rendez-vous (pour le docteur)
   - Confirmation de rendez-vous (pour le patient)
4. Remplacez les valeurs dans `emailService.ts`

#### Option 2: Backend Complet
Pour un système professionnel, vous devriez implémenter :

**Backend API** (Node.js, Python, PHP, etc.) :
```
POST /api/appointments        # Créer un rendez-vous
GET  /api/appointments        # Lister les rendez-vous
PUT  /api/appointments/:id    # Confirmer/modifier
DELETE /api/appointments/:id  # Annuler
```

**Base de données** (MySQL, PostgreSQL, MongoDB) :
```sql
CREATE TABLE appointments (
  id VARCHAR(255) PRIMARY KEY,
  patient_name VARCHAR(255),
  patient_email VARCHAR(255),
  patient_phone VARCHAR(20),
  service_id VARCHAR(100),
  appointment_date DATE,
  appointment_time TIME,
  notes TEXT,
  status ENUM('pending', 'confirmed', 'cancelled', 'completed'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Notifications Email** :
- SMTP configuré (SendGrid, Mailgun, etc.)
- Templates HTML professionnels
- Emails de rappel automatiques

#### Option 3: Services Tiers
- **Calendly** : Intégration simple avec widget
- **Acuity Scheduling** : Système complet
- **Appointlet** : Solution française
- **RDV360** : Spécialisé médical français

### Sécurité et Conformité

Pour un usage médical professionnel :
- ✅ **RGPD** : Consentement et gestion des données
- ✅ **SSL/HTTPS** : Chiffrement des communications
- ✅ **Authentification** : Accès sécurisé au panel admin
- ✅ **Sauvegarde** : Backup automatique des données
- ✅ **Logs** : Traçabilité des actions

### Limitations Actuelles
- 🚫 Pas de persistance entre sessions (localStorage)
- 🚫 Emails non fonctionnels (simulation)
- 🚫 Pas d'authentification admin
- 🚫 Pas de sauvegarde des données

## 📱 Sections du Site

### 🏠 Accueil
- Hero section avec présentation
- Appels à l'action pour rendez-vous
- Statistiques et points forts

### 👩‍⚕️ À Propos
- Parcours et formation de la docteure
- Philosophie médicale
- Qualifications et certifications

### 🩺 Services
- Consultation générale
- Suivi médical
- Pédiatrie
- Médecine de famille
- Vaccinations
- Certificats médicaux

### 🎯 Expertise
- Cardiologie préventive
- Gériatrie
- Diabétologie
- Santé mentale
- Médecine d'urgence

### 📅 Prise de Rendez-vous
- Calendrier interactif
- Sélection de créneaux
- Formulaire de réservation
- Validation en temps réel

### 💬 Témoignages
- Avis patients vérifiés
- Système de notation
- Statistiques de satisfaction

### 📍 Contact
- Coordonnées complètes
- Horaires d'ouverture
- Plan d'accès
- Formulaire de contact

## 🎨 Design et UX

### Couleurs
- **Primaire** : Bleu médical (#2563eb)
- **Secondaire** : Vert santé (#059669)
- **Accent** : Orange chaleureux (#f59e0b)

### Typographie
- **Police principale** : Inter
- **Hiérarchie claire** avec système de titres
- **Lisibilité optimisée** pour tous les âges

### Accessibilité
- Contraste WCAG AA
- Navigation au clavier
- Support lecteurs d'écran
- Textes alternatifs

## 📊 SEO et Performance

- Meta tags optimisées pour le médical
- Mots-clés pertinents
- Structure sémantique HTML5
- Images optimisées
- Chargement rapide

## 🔧 Configuration

### Variables d'Environnement
Créez un fichier `.env.local` :
```env
VITE_CONTACT_EMAIL=contact@dr-dubois.fr
VITE_PHONE_NUMBER=+33123456789
VITE_ADDRESS="123 Avenue de la Santé, 75014 Paris"
```

### Personnalisation
- Modifiez les données dans `src/data/`
- Personnalisez les couleurs dans `src/index.css`
- Ajustez les animations dans les composants

## 📧 Contact et Support

Pour toute question technique ou personnalisation :
- Email : developer@exemple.com
- Documentation : Consultez les commentaires dans le code

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**Développé avec ❤️ pour la santé numérique**
