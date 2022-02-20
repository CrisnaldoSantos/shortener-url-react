import { Container, Nav, Navbar as NavbarRB } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { AuthButton } from '../AuthButton';
import { Logo } from '../Logo';
import { NavLink } from '../NavLink';

export function Navbar() {
  const { pathname } = useLocation();
  const { loginSuccess } = useSelector((state: RootState) => state.auth);

  return (
    <NavbarRB bg="light" expand="lg" className="shadow p-3 mb-1 rounded">
      <Container fluid>
        <NavbarRB.Brand className="mr-5">
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
            {loginSuccess && (
              <NavLink url="/myurls" pathname={pathname}>
                Minhas Urls
              </NavLink>
            )}
          </Nav>
          <AuthButton />
        </NavbarRB.Collapse>
      </Container>
    </NavbarRB>
  );
}
