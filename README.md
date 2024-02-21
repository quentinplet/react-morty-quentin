# CAS PRATIQUE REACT - REACT MORTY - Quentin Plet

## Cas Pratique : Développement d'une Application React consommant l'API Rick et Morty

Application React affichant la liste des épisodes de la série Rick et Morty ainsi que diverses informations pour chaque épisode. L'application est totalement responsive.

Une démo en ligne est disponible ici : https://react-morty-quentin.vercel.app/

## Choix de conception

Je suis parti du [starter](https://github.com/William29302/react-morty-starter) fournit comme point de départ.
J'ai utilisé les technologies suivantes :

1. React, Typescript, React-Router pour le routing et React-Query pour les requêtes API.
2. TailwindCSS comme framework CSS pour le layout, l'intégration de la maquette et la gestion du responsive.
3. React-Icons pour les différentes icônes.
4. Vercel pour le deploiement et l'hébergement.

### Pagination et gestion d'erreurs

La pagination utilise les informations fournies par l'[API RICK & MORTY](https://rickandmortyapi.com/documentation/#rest)

J'ai utilisé React-Query pour afficher le chargement et catch d'éventuelles erreurs lors de requêtes API.

## Pour exécuter l'application localement

```bash
git clone https://github.com/quentinplet/react-morty-quentin.git
cd react-morty-quentin
npm install
npm run dev
```
