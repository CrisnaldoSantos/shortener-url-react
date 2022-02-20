import { ReactNode } from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface NavLinkProps {
  children: ReactNode;
  url: string;
  pathname: string;
}
export function NavLink({ children, url, pathname }: NavLinkProps) {
  const navigate = useNavigate();

  function handleNavigate(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate(url);
  }
  return (
    <Nav.Link
      href="#"
      className={pathname === url ? 'text-primary fw-normal' : ''}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
        handleNavigate(event)
      }
    >
      {children}
    </Nav.Link>
  );
}
