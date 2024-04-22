import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Bagunça</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Exercício 1">Exercício 1</Nav.Link>
            <Nav.Link href="/Exercício 2">Exercício 2</Nav.Link>
            <Nav.Link href="/Exercício 3">Exercício 3</Nav.Link>
            <Nav.Link href="/Exercício 4">Exercício 4</Nav.Link>
            <Nav.Link href="/Exercício 5">Exercício 5</Nav.Link>
            <Nav.Link href="/Exercício 6">Exercício 6</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;