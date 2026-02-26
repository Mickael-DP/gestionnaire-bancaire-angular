# 💳 Gestionnaire Bancaire — Frontend Angular

Interface web d'une application bancaire connectée à une API REST Spring Boot sécurisée par JWT.

---

## 🛠️ Stack technique

- **Angular 21**
- **Tailwind CSS v4**
- **PrimeNG 21** (Tag, Dialog, ConfirmDialog, Toast, Menubar)
- **TypeScript**
- **RxJS** (Observables, async pipe, Signals)
- **Reactive Forms**

---

## ✨ Fonctionnalités

- 🏠 Page d'accueil publique
- 🔐 Inscription et connexion (JWT)
- 📋 Liste des comptes bancaires de l'utilisateur connecté
- 🔍 Détail d'un compte (titulaire, numéro, solde, type)
- ➕ Création d'un nouveau compte bancaire
- 💰 Dépôt et retrait d'argent (via modale PrimeNG)
- 💸 Virement entre deux comptes
- 🗑️ Suppression d'un compte (avec confirmation)
- 🔒 Routes protégées (Guard JWT)
- 👤 Navbar avec infos utilisateur et déconnexion

---

## 🚀 Lancer le projet

### Prérequis

- Node.js
- Angular CLI (`npm install -g @angular/cli`)
- Le backend Spring Boot doit tourner sur `http://localhost:8080`
  👉 [Repo backend](https://github.com/Mickael-DP/gestionnaire-bancaire-spring-boot)

### Installation

```bash
npm install
```

### Démarrer le serveur de développement

```bash
ng serve
```

L'application est accessible sur `http://localhost:4200`

---

## 📁 Structure du projet

```
src/app/
├── core/
│   ├── guards/
│   │   └── auth.guard.ts          # Protection des routes
│   └── interceptors/
│       └── auth.interceptor.ts    # Ajout automatique du token JWT
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── login/             # Page de connexion
│   │   │   └── register/          # Page d'inscription
│   │   └── services/
│   │       └── auth.service.ts    # login, register, token management
│   │
│   ├── comptes/
│   │   ├── components/
│   │   │   ├── liste-comptes/     # Liste des comptes
│   │   │   ├── detail-compte/     # Détail + dépôt/retrait
│   │   │   └── creation-compte/   # Formulaire de création
│   │   └── services/
│   │       └── compte.service.ts  # Appels API comptes
│   │
│   └── virement/
│       └── components/
│           └── virement/          # Formulaire de virement
│
├── layouts/
│   ├── public-layout/
│   │   └── home/                  # Page d'accueil
│   └── auth-layout/
│       └── navbar/                # Sidebar navigation
│
└── shared/
    └── models/
        └── compte.model.ts        # Interfaces TypeScript
```

---

## 🔐 Authentification

L'application utilise JWT stocké dans le `localStorage`. Un interceptor ajoute automatiquement le token dans chaque requête HTTP. Un guard protège les routes privées et redirige vers `/connexion` si non authentifié.

---

## 🔗 API Backend

| Méthode | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/auth/register` | Inscription | ❌ |
| POST | `/auth/login` | Connexion | ❌ |
| GET | `/auth/me` | Infos utilisateur connecté | ✅ |
| GET | `/api/comptes` | Liste des comptes | ✅ |
| GET | `/api/comptes/{id}` | Détail d'un compte | ✅ |
| POST | `/api/comptes` | Créer un compte | ✅ |
| PUT | `/api/comptes/{id}/depot` | Effectuer un dépôt | ✅ |
| PUT | `/api/comptes/{id}/retrait` | Effectuer un retrait | ✅ |
| POST | `/api/comptes/virement` | Effectuer un virement | ✅ |
| DELETE | `/api/comptes/{id}` | Supprimer un compte | ✅ |

---

## 📌 À venir

- 📊 Historique des mouvements

## 👨‍💻 Auteur

**Mickael DALLE PASQUALINE** - Apprentissage Angular

## 📄 Licence

Ce projet est à but éducatif.