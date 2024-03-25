import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faRemove } from "@fortawesome/free-solid-svg-icons" 
import { axios } from "axios"



import logo3 from '../images/download.png'
import logo2 from '../images/logoMpeb.png'


const Ajout = () => {
    return (
        <div>
            <header className="main-header">
                <nav>
                    <div className='img-logo'>
                        <img src={logo2} alt="" className='logo2'/>
                        
                    </div>
                    <div className='img-logo'>
                        <img src={logo3} alt="" className='logo3'/>
                    </div>
                    <Link to={'/Form1'}><button className='deconnexion'>Deconnexion</button></Link>
                    
                </nav>
            </header>
            <div className="form">
                <form action="">
                    <div className="form-ref">
                        <div>
                            <label htmlFor="">Référence</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Date de réception</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Date d'ajout</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="form-ref">
                        <div>
                            <label htmlFor="">Expéditeur / Destinataire</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Nature</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Ajouter un pièce jointe</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="objet">
                        <label htmlFor="">Objet</label>
                        <div>
                            
                            <input type="text" />
                        </div>
                    </div>
                    <div className="btn-form">
                        <div><button><FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>  Annuler</button></div>
                        <div><button><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>  Enregister</button></div>
                    </div>
                </form>
                
            </div>
        </div>

    )
}
export default Ajout