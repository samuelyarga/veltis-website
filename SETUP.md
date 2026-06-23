# Comment lancer Veltis Website

## Étape 1 — Copier le projet hors du workspace gestionERP

Ce projet est dans `gestionERP/veltis-website/` car les outils de dev
sont limités au workspace actuel. Il faut le déplacer :

```
Copier tout le dossier veltis-website/ vers c:\Samuel\Angular\veltis-website\
```

## Étape 2 — Installer les dépendances

```bash
cd c:\Samuel\Angular\veltis-website
npm install
```

## Étape 3 — Lancer le serveur de développement

```bash
npm start
# Le site s'ouvre sur http://localhost:4201
```

## Étape 4 — Builder pour GitHub Pages

```bash
# 1. Installer angular-cli-ghpages si pas déjà fait
npm install -g angular-cli-ghpages

# 2. Créer un repo GitHub appelé "veltis-website"
#    et pousser le code dedans

# 3. Déployer
npm run deploy
# → Site disponible sur https://[votre-username].github.io/veltis-website/
```

## Structure des pages

Le site est une SPA (Single Page Application) avec ces sections :

| Section      | Ancre              | Description                          |
|--------------|--------------------|--------------------------------------|
| Hero         | #accueil           | Titre accrocheur + mockup dashboard  |
| Fonctionnalités | #fonctionnalites| 6 modules détaillés                  |
| Tarifs       | #tarifs            | Essentiel 150k / Pro 200k XOF        |
| Témoignages  | #temoignages       | 3 clients + stats                    |
| Contact      | #contact           | Formulaire de demande                |

## Pour personnaliser

- **Téléphone / Email** : modifier dans `contact.component.ts` → `methods`
- **Logo** : remplacer le SVG dans `navbar.component.ts` et `footer.component.ts`
- **Couleurs** : modifier les variables CSS dans `src/styles.scss`
- **Textes tarifs** : modifier dans `pricing.component.ts`
