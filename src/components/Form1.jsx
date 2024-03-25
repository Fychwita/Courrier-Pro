import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo3 from '../images/download.png';
import logo2 from '../images/logoMpeb.png';

const Form1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logique de vérification des informations d'identification
    if (formData.email === "votre@email.com" && formData.password === "votremotdepasse") {
      // Informations d'identification correctes, rediriger vers '/Table1'
      navigate('/Table1');
    } else {
      // Informations d'identification incorrectes, définir un message d'erreur
      setError("Email ou mot de passe incorrect");
    }
  };

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
        <div className="container-form1">
          <form onSubmit={handleSubmit}>
            <h1>Connectez-vous</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                onChange={handleChange}
              />
            </div>
            <div>
              <a href="">Mot de passe oublié</a>
            </div>
            <button type="submit">Se connecter</button>
          </form>
        </div>
        <div className="container-form2">
          <form action="">
            <h1>Bienvenue !</h1>
            <p>Créez un compte et gérez vos courriers</p>
            <Link to={'/Form2'}><button>Créer un compte</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form1;
