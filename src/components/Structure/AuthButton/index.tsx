import { RootState } from 'store';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NavDropdown, Form, Button } from 'react-bootstrap';
import { logout } from 'store/auth/auth.ducks';

export function AuthButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginSuccess } = useSelector((state: RootState) => state.auth);

  return (
    <>
      {loginSuccess ? (
        <NavDropdown
          title="crisnaldo72@gmail.com"
          id="auth-nav-dropdown"
          className="text-secondary"
        >
          <NavDropdown.Item onClick={() => dispatch(logout())}>
            Sair
          </NavDropdown.Item>
        </NavDropdown>
      ) : (
        <Form className="d-flex justify-content-center">
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
      )}
    </>
  );
}
