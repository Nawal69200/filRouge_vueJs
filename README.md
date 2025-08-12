# filRouge_vueJs
 
# 🍽️ Recettes X

Une application web de partage de recettes de cuisine permettant aux utilisateurs de découvrir, publier et ajouter des recettes en favoris.  
Développée avec **Vue.js (frontend)** et **Symfony API Platform (backend)** dans le cadre d’un projet fil rouge de formation.

---

## 🚀 Fonctionnalités principales

- 🔍 Recherche de recettes
- 👤 Inscription et connexion des utilisateurs
- ⭐ Ajout et suppression de recettes en favoris (réservé aux utilisateurs connectés)
- 📝 Proposition de nouvelles recettes
- 📰 Newsletter
- 📱 Interface responsive (mobile et desktop)

---

## 🛠️ Technologies utilisées

- [Vue.js 3](https://vuejs.org/) – Framework frontend
- [Vue Router](https://router.vuejs.org/) – Gestion des routes
- [Bootstrap 5](https://getbootstrap.com/) – Style et mise en page responsive
- [Axios](https://axios-http.com/) – Requêtes HTTP vers l'API
- [Symfony 7 + API Platform](https://api-platform.com/) – Backend REST
- [MySQL](https://www.mysql.com/) – Base de données
- [Docker](https://www.docker.com/) – Déploiement prévu

---

## ⚙️ Installation et lancement

### 1️⃣ Cloner le projet

```bash
git clone https://github.com/mon-compte/recettes-x.git


cd recettes-x/frontend
npm install
npm run dev

http://localhost:5173

cd ../backend
composer install
symfony serve

http://localhost:8000/api

Recettes-X/
│── frontend/        # Application Vue.js
│   ├── src/
│   │   ├── assets/       # Images, CSS, icônes
│   │   ├── components/   # Composants réutilisables
│   │   ├── views/        # Pages principales
│   │   ├── router/       # Configuration Vue Router
│   │   ├── data/         # (temporaire) Fichier data.json
│   │   └── App.vue
│   └── public/           # Fichiers accessibles publiquement
│
└── backend/              # API Symfony
    ├── config/
    ├── src/
    ├── migrations/
    └── ...
