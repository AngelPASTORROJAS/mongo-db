Voici un tutoriel pour créer une dépendance MongoDB dans un projet Node.js :

0. Installer mongodb version community [ici](https://www.mongodb.org/downloads)

1. Initialisez un nouveau projet Node.js :
```bash
mkdir mon-projet-mongodb
cd mon-projet-mongodb
npm init -y
```

2. Installez la dépendance MongoDB :
```bash
npm install mongodb --save
```

3. Créez un fichier `index.js` à la racine du projet :
```bash
touch index.js
```

4. Ouvrez `index.js` et ajoutez le code suivant pour vous connecter à MongoDB :
```javascript
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'maBaseDeDonnees';

async function main() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connecté à MongoDB');

    const db = client.db(dbName);
    // Utilisez 'db' pour effectuer des opérations sur la base de données

  } catch (err) {
    console.error('Erreur de connexion :', err);
  } finally {
    await client.close();
  }
}

main();
```

5. Exécutez le script :
```bash
node index.js
```

## Explications

- L'installation de MongoDB se fait via npm, le gestionnaire de paquets de Node.js[1][5].
- La connexion à MongoDB utilise le `MongoClient` fourni par le driver officiel[7][9].
- Le code de connexion est placé dans une fonction asynchrone pour gérer les promesses[6].
- L'URI de connexion (`mongodb://localhost:27017`) suppose que MongoDB est installé localement. Pour une base de données distante, remplacez-le par l'URI approprié[3].
- N'oubliez pas de fermer la connexion avec `client.close()` une fois les opérations terminées[7].

Ce tutoriel vous permet de créer un projet Node.js avec MongoDB comme dépendance et d'établir une connexion de base à une instance MongoDB[1][5][7].

Citations:  
[1] https://www.mongodb.com/resources/languages/mongodb-and-npm-tutorial  
[2] https://cursa.app/fr/page/creation-d-un-crud-avec-nodejs-et-mongodb-deploiement-d-applications  
[3] https://wirescript.vercel.app/blog/how-to-setup-mongodb-with-node-js-and-express/  
[4] https://dev.to/ericlecodeur/nodejs-express-partie-6-base-de-donnees-mongodb-3n2m  
[5] https://welovedevs.com/fr/articles/nodejs-mongodb/  
[6] https://mongodb.github.io/node-mongodb-native/  
[7] https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database  
[8] https://www.youtube.com/watch?v=7hr1BOGEVXs  
[9] https://www.mongodb.com/resources/languages/mongodb-with-nodejs  
[10] https://www.npmjs.com/package/mongodb?activeTab=dependencies  
[11] https://www.netdevices.fr/mise-en-place-d-un-generateur-de-pdf-en-backend-node-js-a-partir-de-donnees-dans-une-base-mongodb/