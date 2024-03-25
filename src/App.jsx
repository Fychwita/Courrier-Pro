import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import './Main.css'
import './components/Lien1'
import Table1 from "./components/Table1"
import Form1 from "./components/Form1"
import Form2 from "./components/Form2"
import Ajout from "./components/Ajout"
import Sortie from "./components/Sortie"

const App = () => {
       return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="Form1" element={<Form1/>}/>
                <Route path="Table1" element={<Table1/>}/>
                <Route path="Ajout" element={<Ajout/>}/>
                <Route path="Sortie" element={<Sortie/>}/>
                <Route path="Form2" element={<Form2/>}/>

            </Routes>
        </BrowserRouter>
       )
}
export default App;