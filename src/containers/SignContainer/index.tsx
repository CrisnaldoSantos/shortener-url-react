import { Container } from 'react-bootstrap';

interface SignContainerProps {
  children: React.ReactNode;
}
export function SignContainer({ children }: SignContainerProps) {
  return (
    <Container fluid className="mt-2">
      {children}
    </Container>
  );
}
