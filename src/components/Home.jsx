import { Link } from "react-router-dom"

import logo from '../images/logo.jpg'

const Home = () => {
    return (
    <div className='box1'>
        <div className='img1-home'>
            <img className='App-logo' src={logo} alt="" />
            
        </div>
        <div className='lien-home'>
            <Link to={'/Form1'}>Commencer</Link>
        </div>
        
    </div>
     
    )
}
export default Home;