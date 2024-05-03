import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

function NavBar({UserDetails}) {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About Us</Nav.Link>
          </Nav>
          {UserDetails==undefined&&(<Button type="submit">Login</Button>)}
        </Container>
      </Navbar>
  );
}

export default NavBar;