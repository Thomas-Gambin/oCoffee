# O'Coffee :

Dans le cadre de ma formation de **Concepteur Développeur d’Applications** au sein de l'école **O'Clock**, voici un projet personnel créé dans le but de concevoir un **site dynamique en Node.js** pour présenter une boutique de café et les produits qu'elle propose.

## Informations sur le projet :

Le projet s'est déroulé sur 4 jours, avec un **délai à respecter** et un **cahier des charges** à suivre pour répondre aux demandes d'un client fictif.

## Stack du projet :

La stack imposée pour ce projet était : **Node.js** avec le framework Express pour le back-end, et **PostgreSQL** pour la gestion de la base de données.

## Organisation :

Voici comment j'ai organisé mon travail sur ce projet :  
- **Jour 1** : Création des fichiers d'intégration HTML et CSS.  
- **Jour 2** : Installation des dépendances (Express, EJS, Dotenv, Leaflet et Postgres) et intégration des différentes vues avec leurs routes.  
- **Jour 3** : Mise en place de la base de données et dynamisation de toutes les vues.  
- **Jour 4** : Correction de divers petits bugs et déploiement du projet.

## Objectif :

L'objectif de ce projet était de mettre en pratique toutes les compétences acquises durant les deux premiers mois de formation, afin de créer de A à Z, en totale autonomie, un petit projet fonctionnel avec des contraintes imposées par le client fictif, telles que la mise en page et le thème visuel du site.

## Dockerisation :

Le projet est maintenant dockerisé et peut être lancé facilement avec Docker Compose.

### Prérequis :
- Docker
- Docker Compose

### Installation et lancement :

1. **Créer un fichier `.env`** à la racine du projet (⚠️ **OBLIGATOIRE** - les secrets ne sont plus en dur) :

   Copiez le fichier `env.example` et renommez-le en `.env`, puis modifiez les valeurs :
   
   ```bash
   cp env.example .env
   ```
   
   Ou créez manuellement le fichier `.env` avec les variables ci-dessous.

   **Variables obligatoires à configurer dans `.env`** :
   ```env
   # Configuration de l'application
   PORT=3000

   # Configuration PostgreSQL (OBLIGATOIRE - utilisez des mots de passe sécurisés !)
   POSTGRES_USER=ocoffee
   POSTGRES_PASSWORD=votre_mot_de_passe_securise_ici
   POSTGRES_DB=ocoffee
   POSTGRES_PORT=5432

   # Configuration Adminer (optionnel, uniquement pour docker-compose.local.yml)
   ADMINER_PORT=8080
   ```

   **Sécurité** : 
   - Ne commitez **JAMAIS** le fichier `.env` (il est déjà dans `.gitignore`)
   - Utilisez des mots de passe forts et uniques
   - En production, utilisez un gestionnaire de secrets (Docker Secrets, Kubernetes Secrets, etc.)

2. **Lancer les conteneurs** :

   - **Pour le développement local (avec Adminer)** :
   ```bash
   docker compose -f docker-compose.local.yml up -d
   ```

   - **Pour la production** :
   ```bash
   docker compose up -d
   ```

3. **Accéder aux services** :
   - Application : http://localhost:3000
   - Base de données PostgreSQL : localhost:5432
   - Adminer (local uniquement) : http://localhost:8080
     - Système : PostgreSQL
     - Serveur : postgres
     - Utilisateur : (valeur de POSTGRES_USER dans .env)
     - Mot de passe : (valeur de POSTGRES_PASSWORD dans .env)
     - Base de données : (valeur de POSTGRES_DB dans .env)

### Commandes utiles :

- **Arrêter les conteneurs (local)** :
```bash
docker compose -f docker-compose.local.yml down
```

- **Voir les logs (local)** :
```bash
docker compose -f docker-compose.local.yml logs -f
```

- **Reconstruire les images (local)** :
```bash
docker compose -f docker-compose.local.yml up -d --build
```

- **Supprimer les volumes (base de données)** :
```bash
docker compose -f docker-compose.local.yml down -v
```

### Fichiers Docker Compose :

- **`docker-compose.yml`** : Configuration pour la production (sans Adminer)
- **`docker-compose.local.yml`** : Configuration pour le développement local (avec Adminer)

## CI/CD avec GitHub Actions :

Le projet inclut des workflows GitHub Actions pour automatiser les tests et le déploiement.

### Workflows disponibles :

1. **`.github/workflows/ci.yml`** : Pipeline CI/CD
   - **Lint & Test** : Vérifie la syntaxe et exécute les tests
   - **Build Docker Image** : Construit l'image Docker et la push vers GitHub Container Registry
   - **Test Docker Compose** : Teste l'application avec Docker Compose

### Déclencheurs :

- **Push** sur les branches `main`, `master`, `dev` → Exécute le pipeline CI
- **Pull Request** sur `main`, `master`, `dev` → Exécute le pipeline CI (sans push d'image)

### Images Docker :

Les images sont automatiquement publiées sur **GitHub Container Registry** (`ghcr.io`) :
- Format : `ghcr.io/<votre-username>/<nom-du-repo>:<tag>`
- Tags disponibles : `latest`, `main`, `dev`, `sha-<commit>`, etc.
