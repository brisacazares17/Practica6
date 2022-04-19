import Registro from './Components/Registro';
import Barra from './layout/Barra';
import Barra1 from './layout/Barra1';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <div>
    <center>
        <h1>
           Razas Caninas
        </h1> 
        <BrowserRouter> 
                <Routes>
                <Route path='/' element={<Barra/>}>
                <Route path='Registro' element={  <Registro/>   }     />
                </Route>
                </Routes>
        </BrowserRouter>
        <table border= "5px">
            <tr>
                <th colspan="1"> Raza</th>
                <th> Imagen </th>
                <th colspan="3">  Mas </th>
            </tr>   
            <tr>
                <th colspan="1"> Chihuahua</th>
                <th> Imagen </th>
                <th colspan="3"> 
                
                </th>
            </tr>        
        </table>
    </center>
    </div>
    </>
  );
}

export default App;