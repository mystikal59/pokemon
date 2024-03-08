import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonsPage from './pages/PokemonsPage';
import GenerationsPage from './pages/GenerationsPage';

function App() {
  return <>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/'element={<PokemonsPage/>} />
    <Route path='/pokemons' element={<PokemonsPage />} />
    <Route path='/generations' element={<GenerationsPage />}  />
    
   </Routes>
    </BrowserRouter>
    </>;
}

export default App;
