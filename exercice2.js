const { MongoClient } = require('mongodb');

// Configuration MongoDB
const url = `mongodb://localhost:27017`;
const client = new MongoClient(url);

// Nom de la base de données
const dbName = 'mydatabase';

// Collections
const productsCollection = client.db(dbName).collection('products');
const ordersCollection = client.db(dbName).collection('orders');
const customersCollection = client.db(dbName).collection('customers');

// Fonction pour créer un produit
async function createProduct(id, name, description, price, stock) {
  try {
    await productsCollection.insertOne({
      id: id,
      name: name,
      description: description,
      price: price,
      stock: stock
    });
    return true;
  } catch (error) {
    console.error("Erreur de création de produit:", error);
    return false;
  }
}

// Fonction pour créer une commande
async function createOrder(id, date, customerId, products) {
  try {
    await ordersCollection.insertOne({
      id: id,
      date: date,
      customerId: customerId,
      products: products // Liste des produits commandés avec quantité
    });
    return true;
  } catch (error) {
    console.error("Erreur de création de commande:", error);
    return false;
  }
}

// Fonction pour créer un client
async function createCustomer(id, name, address, email, orders) {
  try {
    await customersCollection.insertOne({
      id: id,
      name: name,
      address: address,
      email: email,
      orders: orders // Liste des ID des commandes passées
    });
    return true;
  } catch (error) {
    console.error("Erreur de création de client:", error);
    return false;
  }
}

// Exemple d'utilisation
async function main() {
  try {
    await client.connect();
    console.log('Connecté à MongoDB');

    // Créer un produit
    const product = await createProduct(1, "Smartphone", "Un smartphone dernier cri", 699.99, 100);

    // Créer une commande
    const order = await createOrder(1, new Date(), 1, [
      { productId: 1, quantity: 2 }
    ]);

    // Créer un client
    const customer = await createCustomer(1, "Alice Dupont", "123 Rue de la Paix, Paris", "alice@email.com", [1]);

    console.log('Données créées avec succès !');
  } catch (error) {
    console.error('Erreur dans main:', error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
