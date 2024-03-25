const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Joi = require('joi');

const saltRounds = 10;

// Définition du schéma utilisateur
const utilisateurSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  email: { type: String, unique: true },
  motsdepasse: String,
  confirmerMotsdepasse: String,
});

// Méthode pour hacher le mot de passe avant de l'enregistrer dans la base de données
utilisateurSchema.pre('save', function (next) {
  const utilisateur = this;

  // Vérifiez si le mot de passe a été modifié et s'il n'est pas vide ou null
  if (!utilisateur.isModified('motsdepasse') || !utilisateur.motsdepasse) return next();

  bcrypt.hash(utilisateur.motsdepasse, saltRounds, (err, hash) => {
    if (err) {
      return next(err);
    }
    utilisateur.motsdepasse = hash;
    next();
  });
});

// Méthode pour comparer les mots de passe lors de la connexion
utilisateurSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.motsdepasse, (err, isMatch) => {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

// Exportez le modèle d'utilisateur
const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);
module.exports = Utilisateur;
