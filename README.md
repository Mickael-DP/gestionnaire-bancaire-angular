# 💳 Gestionnaire Bancaire — Frontend Angular

Interface web d'une application bancaire connectée à une API REST Spring Boot.

---

## 🛠️ Stack technique

- **Angular 21**
- **Tailwind CSS v4**
- **TypeScript**
- **RxJS** (Observables, async pipe)
- **Reactive Forms**

---

## ✨ Fonctionnalités

- 📋 Liste de tous les comptes bancaires
- 🔍 Détail d'un compte (titulaire, numéro, solde, type)
- ➕ Création d'un nouveau compte bancaire
- 💰 Dépôt et retrait d'argent (via modale)
- 💸 Virement entre deux comptes
- 🗑️ Suppression d'un compte

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
src/
├── app/
│   ├── components/
│   │   ├── liste-comptes/       # Liste de tous les comptes
│   │   ├── detail-compte/       # Détail + dépôt/retrait
│   │   ├── creation-compte/     # Formulaire de création
│   │   └── virement/            # Formulaire de virement
│   ├── models/
│   │   └── compte.model.ts      # Interfaces TypeScript
│   └── services/
│       └── compte.service.ts    # Appels API REST
```

---

## 🔗 API Backend

L'application consomme les endpoints suivants :

| Méthode | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/comptes` | Liste tous les comptes |
| GET | `/api/comptes/{id}` | Détail d'un compte |
| POST | `/api/comptes` | Créer un compte |
| PUT | `/api/comptes/{id}/depot` | Effectuer un dépôt |
| PUT | `/api/comptes/{id}/retrait` | Effectuer un retrait |
| POST | `/api/comptes/virement` | Effectuer un virement |
| DELETE | `/api/comptes/{id}` | Supprimer un compte |

---

## 📌 À venir

- 🔐 Authentification avec Spring Security + JWT
- 👤 Gestion des utilisateurs (comptes liés à un user)
- 📊 Historique des mouvements