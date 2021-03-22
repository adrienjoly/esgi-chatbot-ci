const express = require('express');

const PORT = 3000;

// instancier le serveur applicatif "express"
const app = express();
app.use(express.json());

// définir le point d'entrée `GET /` qui répond "Bonjour !" à chaque requête reçue
app.get('/', (req, res) => {
  res.send('Bonjour !');
});

// ajouter le point d'entrée `GET /hello?nom=XXX` comme spécifié dans l'énoncé
app.get('/hello', (req, res) => {
  if (req.query.nom) {
    res.send('Bonjour, ' + req.query.nom + ' !');
  } else {
    res.send('Quel est votre nom ?');
  }
});

// ajouter le point d'entrée `POST /chat` comme spécifié dans l'énoncé
app.post('/chat', (req, res) => {
  if (req.body.msg === "ville") {
    res.send("Nous sommes à Paris");
  } else  {
    res.send("Il fait beau");
  }
});

// demander au serveur applicatif d'attendre des requêtes depuis le port spécifié plus haut
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
