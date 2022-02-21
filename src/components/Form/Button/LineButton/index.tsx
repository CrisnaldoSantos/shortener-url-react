import { ReactNode } from 'react';
import { Row, Col, Button, ButtonProps } from 'react-bootstrap';

interface LineButtonProps extends ButtonProps {
  children: ReactNode;
  variant?: string;
}
export function LineButton({
  children,
  variant = 'primary',
  ...rest
}: LineButtonProps) {
  return (
    <Row className="d-flex justify-content-center">
      <Col sm={12} md={6} className="d-flex justify-content-center">
        <Button variant={variant} {...rest}>
          {children}
        </Button>
      </Col>
    </Row>
  );
}
