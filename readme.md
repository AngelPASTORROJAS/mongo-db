# TP : MODÉLISATION EN MONGODB

## Exercice 1 :

Créer des schémas JSON pour les utilisateurs, les articles et les commentaires dans une application
de blog.  
• Schéma pour les utilisateurs : Inclure des champs pour l'ID de l'utilisateur, le nom, l'email et une liste des ID des articles écrits par l'utilisateur.  
• Schéma pour les articles : Inclure des champs pour l'ID de l'article, le titre, le contenu, l'ID de l'auteur (référence à un utilisateur) et une liste des ID des commentaires sur l'article.  
• Schéma pour les commentaires : Inclure des champs pour l'ID du commentaire, le texte du commentaire, l'ID de l'auteur du commentaire et l'ID de l'article auquel le commentaire est associé.

### Exemple de résolution
```
npm run exo1
```

## Exercice 2 :

Créer des schémas JSON pour les produits, les commandes et les clients dans une boutique en ligne.  
• Schéma pour les produits : Inclure des champs pour l'ID du produit, le nom, la description, le prix et la quantité en stock.  
• Schéma pour les commandes : Inclure des champs pour l'ID de la commande, la date de commande, l'ID du client, et une liste des produits commandés avec la quantité pour chaque produit.  
• Schéma pour les clients : Inclure des champs pour l'ID du client, le nom, l'adresse, l'email, et une liste des ID des commandes passées par le client.  

### Exemple de résolution
```
npm run exo2
```