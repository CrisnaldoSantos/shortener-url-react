import { ReactNode } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface SignLinkProps {
  url: string;
  children: ReactNode;
}

export function SignLink({ url, children }: SignLinkProps) {
  return (
    <Row>
      <Col className="d-flex justify-content-center" sm={12}>
        <Link to={url}>
          <Button
            variant="transparent"
            className="text-secondary fs-6 fw-normal"
          >
            {children}
          </Button>
        </Link>
      </Col>
      <Col className="d-flex justify-content-center" sm={12}>
        <Link to="/">
          <Button
            variant="transparent"
            className="text-secondary fs-6 fw-normal"
          >
            Continuar sem autenticação
          </Button>
        </Link>
      </Col>
    </Row>
  );
}
