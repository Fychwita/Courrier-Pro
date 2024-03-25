const express = require("express");
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser'); // Import de body-parser
const mongoose = require("mongoose");
const postRoutes = require("./routes/post.routes");
const Utilisateur = require("./models/utilisateurs.model");
const dotenv = require('dotenv').config();
const port = 3000;
const { body, validationResult } = require('express-validator');

// Connexion à la DB
mongoose.connect("mongodb+srv://fitahianarazafindrahaniraka:oCjSiHEiz2ZHl9Dn@cluster0.kutahxa.mongodb.net/");

const app = express();
app.use(cors());
app.use('/posts', postRoutes);

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Utilisation de body-parser pour traiter les données POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuration de express-session
app.use(session({
  secret: 'votre_secret_key',
  resave: true,
  saveUninitialized: true
}));

// Middleware pour la route /creerCompte
app.post('/creerCompte', async (req, res) => {
  const { nom, prenom, email, motsdepasse } = req.body;
  let utilisateurs = new Utilisateur(req.body);

  try {
    // Vérifier si l'utilisateur existe déjà
    const utilisateurExist = await Utilisateur.findOne({ email });

    if (utilisateurExist) {
      return res.status(400).json({ message: 'Un compte avec cet email existe déjà.' });
    }

    // Créer un nouveau compte
    const nouveauUtilisateur = new Utilisateur({ nom, prenom, email, motsdepasse });
    await nouveauUtilisateur.save();
    req.session.user = nouveauUtilisateur; // Stocker des informations dans la session
    res.status(201).json({ message: 'Compte créé avec succès.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du compte.' });
  }
});

// Lancer le serveur
app.listen(port, (err) => {
  if (err) {
    console.error("Erreur lors du démarrage du serveur:", err);
  } else {
    console.log("Le serveur a démarré au port " + port);
  }
});
