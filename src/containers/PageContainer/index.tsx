import { Navbar } from 'components/Structure/Navbar';
import { Container } from 'react-bootstrap';

interface PageContainerProps {
  children: React.ReactNode;
}
export function PageContainer({ children }: PageContainerProps) {
  return (
    <>
      <Navbar />
      <Container fluid className="mt-2">
        {children}
      </Container>
    </>
  );
}
