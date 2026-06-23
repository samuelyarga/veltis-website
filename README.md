# Veltis Website — Site vitrine

Site vitrine du logiciel ERP Veltis.

## Lancer en local

```bash
cd c:\Samuel\Angular\gestionERP\veltis-website
npm install
npm start
# → http://localhost:4201
```

## Build production

```bash
npm run build
# Fichiers générés dans dist/veltis-website/browser/
```

## Déployer sur GitHub Pages

1. Créer un repo GitHub `veltis-website`
2. Initialiser git dans ce dossier
3. Lancer :
```bash
npm run deploy
```

Le site sera disponible sur `https://[username].github.io/veltis-website/`

## Structure

```
src/
  app/
    navbar/     — Barre de navigation sticky avec scroll detection
    hero/       — Section hero avec mockup dashboard animé
    features/   — Grille des 6 modules principaux
    pricing/    — Plans Essentiel (150 000 XOF) et Pro (200 000 XOF)
    testimonials/ — Témoignages clients + statistiques
    contact/    — Formulaire de contact
    footer/     — Pied de page avec liens
  styles.scss   — Variables CSS globales + animations
  index.html    — Page principale
```
