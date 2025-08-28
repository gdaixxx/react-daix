import CartWidget from './CartWidget';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';

const NavBar = () =>{
    return(
     <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" style={{padding: '10px'}}>
        <Navbar.Brand as={NavLink} to='/'>Escaparate Virtual</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to='categoria/Cuentos' className="anchor-nav">Cuento</Nav.Link>
          <Nav.Link as={NavLink} to='categoria/Novela' className="anchor-nav">Novela</Nav.Link>
          <Nav.Link as={NavLink} to='categoria/Poesia' className="anchor-nav">Poesía</Nav.Link>
          <Nav.Link as={NavLink} to='categoria/Otros' className="anchor-nav">Otros</Nav.Link>
        </Nav> 
      <CartWidget />
      </Navbar>
    </>
  )
}



export default NavBar


