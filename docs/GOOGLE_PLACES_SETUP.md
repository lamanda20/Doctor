# Configuration Google Places API pour les Avis en Temps Réel

## Objectif
Ce guide vous explique comment configurer l'API Google Places pour afficher automatiquement les vrais avis de votre cabinet médical depuis Google Maps.

## Étape 1 : Créer un projet Google Cloud

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Activez la facturation (obligatoire pour l'API Places)

## Étape 2 : Activer l'API Places

1. Dans la console Google Cloud, allez dans "APIs & Services" > "Library"
2. Recherchez "Places API" 
3. Cliquez sur "Places API" et activez-la

## Étape 3 : Créer une clé API

1. Allez dans "APIs & Services" > "Credentials"
2. Cliquez sur "Create Credentials" > "API Key"
3. Copiez la clé générée

### Sécuriser votre clé API (Important !)

1. Cliquez sur votre clé API pour la modifier
2. Dans "Application restrictions", sélectionnez "HTTP referrers"
3. Ajoutez vos domaines autorisés :
   - `localhost:*` (pour le développement)
   - `votre-domaine.com/*` (pour la production)
4. Dans "API restrictions", sélectionnez "Restrict key" et choisissez "Places API"

## Étape 4 : Trouver votre Place ID

### Méthode 1 : Via Google Maps
1. Ouvrez [Google Maps](https://maps.google.com)
2. Recherchez votre cabinet médical
3. Cliquez sur votre établissement
4. L'URL contient des informations sur le lieu
5. Utilisez l'outil [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id#find-id) de Google

### Méthode 2 : Via l'API (recommandé)
Utilisez l'API Text Search pour trouver votre Place ID :

```bash
https://maps.googleapis.com/maps/api/place/textsearch/json?query=Cabinet+Medical+Dr+Hasnaa+El+Malki+[VOTRE_VILLE]&key=VOTRE_CLE_API
```

Le Place ID sera dans la réponse JSON sous `results[0].place_id`.

## Étape 5 : Configuration dans le projet

1. Copiez le fichier `.env.example` vers `.env`
2. Remplissez vos valeurs :

```env
VITE_GOOGLE_PLACES_API_KEY=votre_cle_api_ici
VITE_GOOGLE_PLACE_ID=votre_place_id_ici
```

## Étape 6 : Test et vérification

1. Redémarrez votre serveur de développement : `npm run dev`
2. Allez sur la section "Témoignages" de votre site
3. Vérifiez que les avis se chargent depuis Google Maps

### Indicateurs de statut
- ✅ **Vert** : API connectée, avis en temps réel
- 🟡 **Jaune** : Mode démonstration, configuration manquante
- 🔄 **Animation** : Chargement en cours
- ⚠️ **Alerte** : Erreur temporaire, utilisation du cache

## Tarification Google Places API

- **Gratuit** : 100 000 requêtes par mois
- Votre site utilise la mise en cache (30 minutes) pour limiter les appels API
- Une visite par utilisateur = 1 requête maximum

## Fonctionnalités implémentées

### ✅ Ce qui fonctionne
- Récupération automatique des avis Google Maps
- Mise en cache intelligente (30 minutes)
- Fallback vers des avis statiques en cas d'erreur
- Affichage des statistiques (note moyenne, nombre d'avis)
- Bouton de rafraîchissement manuel
- Lien direct pour laisser un avis
- Gestion des erreurs et états de chargement

### 🔄 Rafraîchissement automatique
- Cache de 30 minutes pour optimiser les performances
- Rafraîchissement automatique toutes les 30 minutes
- Bouton manuel pour forcer le rafraîchissement

### 🛡️ Gestion des erreurs
- Fallback vers des avis de démonstration
- Messages d'erreur informatifs
- Retry automatique
- Indicateurs visuels de statut

## Dépannage

### Problème : "API key not valid"
- Vérifiez que l'API Places est activée
- Vérifiez les restrictions de domaine
- Assurez-vous que la facturation est activée

### Problème : "Place not found"
- Vérifiez votre Place ID avec l'outil Google
- Assurez-vous que votre établissement est bien référencé sur Google Maps

### Problème : Pas d'avis affichés
- Vérifiez que votre établissement a des avis publics sur Google
- Certains avis peuvent être filtrés par Google

## Support

En cas de problème, vérifiez :
1. Les logs de la console du navigateur
2. Les indicateurs de statut sur la page
3. Votre quota API dans Google Cloud Console

L'intégration fonctionne en mode dégradé gracieux : même sans configuration API, le site affiche des avis de démonstration professionnels.