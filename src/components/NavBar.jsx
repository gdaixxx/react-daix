import CartWidget from './CartWidget';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () =>{
    return(
     <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" style={{padding: '10px'}}>
        <Navbar.Brand href="#home">Escaparate Virtual</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Libros</Nav.Link>
          <Nav.Link href="#features">Revistas</Nav.Link>
          <Nav.Link href="#pricing">Cuadernillos</Nav.Link>
        </Nav> 
      <CartWidget />
      </Navbar>
    </>
  )
}



export default NavBar


