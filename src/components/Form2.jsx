import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo3 from '../images/download.png';
import logo2 from '../images/logoMpeb.png';

const Form2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    motsdepasse: "",
    confirmerMotsdepasse: "",
  });

  const [isCreateAccountValid, setIsCreateAccountValid] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateAccountValidation = () => {
    const { nom, prenom, email, motsdepasse, confirmerMotsdepasse } = formData;
    const isValid = nom && prenom && email && motsdepasse && confirmerMotsdepasse && (motsdepasse === confirmerMotsdepasse);
    setIsCreateAccountValid(isValid);
  };

  const handleCreateAccountSubmit = async (e) => {
    e.preventDefault();
    handleCreateAccountValidation();
    
    try {
      const response = await axios.post('http://localhost:3000/creerCompte', formData);
      console.log(response.data);
      // Vous pouvez ajouter un traitement supplémentaire ici si nécessaire
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement:', error);
    }
  };
    
const [nom, setNom] = useState()
const [prenom, setPrenom] = useState()
const [email, setemail] = useState()
const [fonction, setFonction] = useState()
const [motsdepasse, setMotsdePasse] = useState()
const [confirmerMotsdepasse, setconfirmerMotsdepasse] = useState()
//akDwks+u     
const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/posts/ajouter", {nom, prenom, email, motsdepasse, confirmerMotsdepasse})
    .then(result => console.log(result))
    .catch(err => console.log("Sorry its not working"))
}

  return (
    <div>
      <header className="main-header">
        <nav>
          <div className='img-logo'>
            <img src={logo2} alt="" />
          </div>
          <div className='img-logo'>
            <img src={logo3} alt="" className='logo3'/>
          </div>
        </nav>
      </header>
      <div className="login-form">
        <div className="container-form2">
          <form onSubmit={handleCreateAccountSubmit}>
            <h1>Heureuse de vous revoir !</h1>
            <p>Si vous disposez d'un compte, connectez-vous ici</p>
            <Link to={'/Form1'}>
              <button type="button">Se connecter</button>
            </Link>
          </form>
        </div>
        <div className="container-form1">
          <form onSubmit={Submit}>
            <h1>Créer un compte</h1>
            <div>
              <input type="text" name="nom" placeholder=" Nom" onChange={ (e) => setNom(e.target.value)} />
            </div>
            <div>
              <input type="text" name="prenom" placeholder=" Prénom" onChange={ (e) => setPrenom(e.target.value)}  />
            </div>
            <div>
              <input type="email" name="email" placeholder=" Email" onChange={ (e) => setemail(e.target.value)} />
            </div>
            <div>
              <input type="password" name="motsdepasse" placeholder=" Mots de passe" onChange={ (e) => setMotsdePasse(e.target.value)}  />
            </div>
            <div>
              <input type="password" name="confirmerMotsdepasse" placeholder=" Confirmer votre mot de passe" onChange={ (e) => setconfirmerMotsdepasse(e.target.value)} />
            </div>
            <button type="submit" disabled={!isCreateAccountValid} >Créer un compte</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form2;
