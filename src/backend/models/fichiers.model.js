const mongoose = require('mongoose');

const fichierSchema = new mongoose.Schema({
  nom: String,
  proprietaire: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'utilisateur' 
  },
  
});

const Fichier = mongoose.model('Fichier', fichierSchema);

module.exports = Fichier;
