import {
  Container,
  Nav,
  Form,
  Button,
  Navbar as NavbarRB,
} from 'react-bootstrap';

export function Navbar() {
  return (
    <NavbarRB bg="light" expand="lg" className="shadow p-3 mb-1 rounded">
      <Container fluid>
        <NavbarRB.Brand href="#" className="mr-5 text-primary fw-bold">
          SuaShortener
        </NavbarRB.Brand>
        <NavbarRB.Toggle aria-controls="navbarScroll" />
        <NavbarRB.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/" color="success">
              Encurtador
            </Nav.Link>
            <Nav.Link href="#action2">Análise</Nav.Link>

            <Nav.Link href="#">Minhas Urls</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-primary" className="mx-2">
              Entrar
            </Button>
            <Button variant="outline-secondary">Registrar</Button>
          </Form>
        </NavbarRB.Collapse>
      </Container>
    </NavbarRB>
  );
}
