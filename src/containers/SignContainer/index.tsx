import { Container } from 'react-bootstrap';

interface SignContainerProps {
  children: React.ReactNode;
}
export function SignContainer({ children }: SignContainerProps) {
  return (
    <Container
      fluid
      className="d-flex w-100 min-vh-100 justify-content-center align-items-center bg-light"
    >
      {children}
    </Container>
  );
}
