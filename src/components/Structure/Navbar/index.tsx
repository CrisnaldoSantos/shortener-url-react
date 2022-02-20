import {
  Container,
  Nav,
  Form,
  Button,
  Navbar as NavbarRB,
} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '../Logo';
import { NavLink } from '../NavLink';

export function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <NavbarRB bg="light" expand="lg" className="shadow p-3 mb-1 rounded">
      <Container fluid>
        <NavbarRB.Brand href="#" className="mr-5">
          <Logo />
        </NavbarRB.Brand>
        <NavbarRB.Toggle aria-controls="navbarScroll" />
        <NavbarRB.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <NavLink url="/" pathname={pathname}>
              Encurtador
            </NavLink>

            <NavLink url="/analytics" pathname={pathname}>
              Análise
            </NavLink>

            <Nav.Link href="#">Minhas Urls</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button
              variant="outline-primary"
              className="mx-2"
              onClick={() => navigate('/login')}
            >
              Entrar
            </Button>
            <Button
              variant="outline-secondary"
              onClick={() => navigate('/register')}
            >
              Registrar
            </Button>
          </Form>
        </NavbarRB.Collapse>
      </Container>
    </NavbarRB>
  );
}
