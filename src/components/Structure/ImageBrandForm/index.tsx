import { Row, Col, Form } from 'react-bootstrap';
import { ShortImage } from '../ShortImage';

export function ImageBrandForm() {
  return (
    <Row>
      <Col lg={12} className="d-flex justify-content-center">
        <ShortImage imageSize="100px" />
      </Col>
      <Col lg={12}>
        <Form.Text className="d-flex justify-content-center text-primary fw-bold fs-3 text-center mb-3">
          SuaShortener
        </Form.Text>
      </Col>
    </Row>
  );
}
