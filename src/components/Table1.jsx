import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faEdit, faTrashAlt, faAdd } from "@fortawesome/free-solid-svg-icons"

import logo3 from '../images/download.png'
import logo2 from '../images/logoMpeb.png'



const Table1 = () => {
    return (
        <div className='Table1'>
            <header className="main-header">
                <nav>
                    <div className='img-logo'>
                        <img src={logo2} alt="" />
                        
                    </div>
                    <div className='img-logo'>
                        <img src={logo3} alt="" className='logo3'/>
                    </div>
                    <Link to={'/Form1'}><button className='deconnexion'>Deconnexion</button></Link>
                </nav>
            </header>
            <div className="table1-home">
                <div className="sidebar">
                <div className="lien">
                    <div><span>Courrier :</span></div>
                    <a href="" className='lien1'>Entrée</a>
                    <Link to={'/Sortie'} className='lien2'>Sortie</Link>   
                    
                </div>
                
                <div className="btns">
        
                    <input type="search" placeholder='Rechercher'/>
                    <Link to={'/Ajout'}><button className='ajouter'><FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>  Ajouter</button></Link>
                    
                </div>
            </div>
            <div className="table1">
                <table className='content-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Référence</th>
                            <th>Objet</th>
                            <th>Contenu</th>
                            <th>Date de récéption</th>
                            <th>Date d'ajout</th>
                            <th>Expéditeur / <br />Destinataire </th>
                            <th>Nature</th>
                            <th>Modification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Courrier</td>
                            <td>Blaba</td>
                            <td>Dossier</td>
                            <td>11/12/23</td>
                            <td>11/13/23</td>
                            <td>SG</td>
                            <td>Entrée</td>
                            <td>
                                <div className="table-modif">
                                    <div className="span-modif">
                                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                                    </div>
                                    <button>Affecter</button>
                                </div>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Courrier</td>
                            <td>Blaba</td>
                            <td>Dossier</td>
                            <td>11/12/23</td>
                            <td>11/13/23</td>
                            <td>SG</td>
                            <td>Entrée</td>
                            <td>
                                
                                <div className="table-modif">
                                    <div className="span-modif">
                                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                                    </div>
                                    <button>Affecter</button>
                                </div>
    
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Courrier</td>
                            <td>Blaba</td>
                            <td>Dossier</td>
                            <td>11/12/23</td>
                            <td>11/13/23</td>
                            <td>SG</td>
                            <td>Entrée</td>
                            <td>
                            <div className="table-modif">
                                    <div className="span-modif">
                                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                                    </div>
                                    <button>Affecter</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Courrier</td>
                            <td>Blaba</td>
                            <td>Dossier</td>
                            <td>11/12/23</td>
                            <td>11/13/23</td>
                            <td>SG</td>
                            <td>Entrée</td>
                            <td>
                            <div className="table-modif">
                                    <div className="span-modif">
                                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                                    </div>
                                    <button>Affecter</button>
                                </div>
                            </td>
                        </tr>
                        <tr>

                        </tr>
                        <tr>

                        </tr>
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            
        </div>
    )
}
export default Table1