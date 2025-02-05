const { MongoClient } = require('mongodb');

// Configuration MongoDB
const url = `mongodb://localhost:27017`;
const client = new MongoClient(url);

// Database Name
const dbName = 'mydatabase';

// Collections
const usersCollection = client.db(dbName).collection('users');
const articlesCollection = client.db(dbName).collection('articles');
const commentsCollection = client.db(dbName).collection('comments');

async function createUser(id, nom, email) {
  try {
    await usersCollection.insertOne({
      id: id,
      nom: nom,
      email: email,
      author: null
    });
    return true;
  } catch (error) {
    console.error("Erreur de création d'utilisateur:", error);
    return false;
  }
}

async function createArticle(articleId, title, content, author) {
  try {
    await articlesCollection.insertOne({
      id: articleId,
      titre: title,
      contenu: content,
      auteur: author,
      comments: []
    });
    return true;
  } catch (error) {
    console.error("Erreur de création d'article:", error);
    return false;
  }
}

async function createComment(commentId, texte, author, article) {
  try {
    await commentsCollection.insertOne({
      id: commentId,
      texte: texte,
      auteur: author,
      article: article
    });
    return true;
  } catch (error) {
    console.error('Erreur de création de commentaire:', error);
    return false;
  }
}

// Exemple d'insertion de données
async function main() {
  try {
    await client.connect();
    console.log('Connecté à MongoDB');

    // Créer un utilisateur
    const user = await createUser(1, 'John Doe', 'john@example.com');

    // Créer un article
    const article = await createArticle(1, 'Mon Premier Article', 
      "C'est un article cool avec des commentaires. Voulez-vous que je vous en dise plus ?", 
      1);

    // Créer un commentaire
    const comment = await createComment(1, 'Bonjour !', 2, 1);

    console.log('Données créées avec succès !');
  } catch (error) {
    console.error('Erreur dans main:', error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
