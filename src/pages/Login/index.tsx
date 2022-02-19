import { LineButton } from 'components/Form/Button/LineButton';
import { Input } from 'components/Form/Input';
import { ImageBrandForm } from 'components/Structure/ImageBrandForm';
import { SignLink } from 'components/Structure/SignLink';
import { SignContainer } from 'containers/SignContainer';
import { Col, Form, Row } from 'react-bootstrap';

export function Login() {
  return (
    <SignContainer>
      <Row className="w-100 d-flex justify-content-center">
        <Col sm={12} md={5} xl={4}>
          <Form className="shadow mt-3 bg-white py-5 px-4 rounded">
            <ImageBrandForm />
            <Input label="Email" name="loginEmail" type="email" size="lg" />
            <Input
              label="Senha"
              name="loginPassword"
              type="password"
              size="lg"
            />
            <LineButton type="submit" size="lg" className="mt-3 mb-2">
              Entrar
            </LineButton>
            <SignLink url="/register">Ainda não possuo uma conta.</SignLink>
          </Form>
        </Col>
      </Row>
    </SignContainer>
  );
}
