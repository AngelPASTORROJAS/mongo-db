# DÉVELOPPER UNE ENTREPRISE PROSPÈRE
Projet MongoDB, présentation du projet, contexte

## CONTEXTE

Vous êtes développeur sénior au sein de la start-up Datasphere Innovations.  
On vous confie la mission de relever un challenge, concevoir une application illustrant l’intérêt de l’utilisation du No-SQL et de MongoDB

> **Idées** : Gestion des stocks et des catalogues, Messagerie, Systèmes de gestion de contenus, Détection des fraudes et authentification de l’identité, Services financiers et paiements

> Vous devrez d’abord réaliser un POC, puis un MVP et enfin l’application finale si vous réussissez le challeng

## DÉTERMINATION DES CONTRAINTES


- Le choix des technologies est libre, la seule contrainte est d’utiliser une base de données No-SQL avec MongoDB.

- Mettre en oeuvre des fonctionnalités de base comme l'ajout, la mise à jour, la suppression et la recherche de données.

- Analyser l'impact de l'utilisation de différents types d'index.

- Tester la performance de l'application en termes de vitesse de requête et de temps de réponse.

- Préparer une présentation de l'application, du processus de développement, et des résultats de l'évaluation de la performance.

- Présenter l'application et le rapport final devant l’équipe de la DSI.

## SUGGESTION D’APPLICATION

EventHub est une application destinée aux entreprises pour organiser, suivre et analyser des événements en temps réel. L'application permet aux utilisateurs de créer et de gérer des événements, d'inviter des participants, de collecter des feedbacks et d'analyser des données d'engagement.

### POURQUOI MONGODB 

L'utilisation de MongoDB est idéale pour EventHub en raison de sa capacité à gérer des données non structurées et semi-structurées, sa facilité de mise à l'échelle, et sa performance dans le traitement de grandes quantités de données en temps réel.

### FONCTIONNALITÉS 

- Création et gestion d’événements
- Gestion des invitations et des participants
- Collecte de feedback en temps réél
- Tableau de bord et analyse
- Module de networking
- Intégration avec les réseaux sociaux

### ÉTAPES

1. Conception du schéma de données et configuration de MongoDB.

2. Développement des fonctionnalités de base:
    + Création et gestion d'événements, 
    + gestion des invitations.
3. Implémentation du module de feedback et du tableau de bord d'analyse.
4. Finalisation des fonctionnalités de networking et d'intégration aux réseaux sociaux.
5. Tests et optimisation des performances

## FONCTIONNALITÉS EN DÉTAIL

### Création et gestion d’événements

Interface utilisateur intuitive pour créer et gérer des événements:
- titre, 
- description, 
- date, 
- lieu.

Possibilité d'ajouter des détails dynamiques tels que: 
- des orateurs, 
- des sessions, 
- des plans de salle


### Tableau de bord et analyse

Visualisation en temps réel des données clés de l'événement: 
- taux de participation, 
- feedback, 
- interactions.

Utilisation des fonctionnalités d'agrégation de MongoDB pour des insights détaillés.

### Module de networking

Fonctionnalité permettant aux participants de se connecter et d'échanger des informations pendant l'événement.

Stockage des données de networking pour des opportunités de suivi post-événement.

### Gestion des invitations et des participants

Envoi d'invitations par e-mail ou lien direct.

Suivi des RSVP et gestion des listes de participants.

### Collecte de feedback en temps réél

Outil de sondage et de feedback intégré pour collecter les impressions des participants pendant et après l'événement.

Stockage des réponses dans MongoDB pour une analyse rapide et flexible.


### Intégration avec les réseaux sociaux

Outils pour partager des moments de l'événement sur les plateformes sociales.

Collecte et analyse des mentions et des hashtags relatifs à l'événement.
