import {Link, Outlet} from 'react-router-dom';

function Barra() {
    return (
      <div>
      <ul>
       <li>
       <Link to='/registro'>
         Registro
       </Link>   
       </li>
    
       <li>
       <Link to='/regresar'>
          Regresar
       </Link>   
       </li>
       </ul>
      <section>
        <Outlet/>
      </section>
      </div>
    );
  }
  
  export default Barra;