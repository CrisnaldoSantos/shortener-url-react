import { Row, Col, Form } from 'react-bootstrap';

interface UrlResultProps {
  url: string;
}
export function UrlResult({ url }: UrlResultProps) {
  if (url === undefined || url === '') {
    return <></>;
  }

  return (
    <Row className="d-flex justify-content-center mt-5">
      <Col sm={12} md={6} className="d-flex justify-content-center">
        <Form.Text className="fw-bold fs-5">{url}</Form.Text>
      </Col>
    </Row>
  );
}
