import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Product from './components/Product';


function App() {
  return (
    <div >
      <Navbar />
      
      <Routes>
        <Route path='/productos' element={'Productos'} />
        <Route path='/componentes' element={'Componentes'} />
        <Route path='/equipos_armados' element={'Equipos armados'} />
        <Route path='/notebooks' element={'notebooks'} />
        <Route path='/monitores' element={'Monitores'} />
        <Route path='/perifericos' element={'Perifericos'} />

        <Route path='/producto' element={<Product/>}/>


      </Routes>

    </div>
  );
}

export default App;
