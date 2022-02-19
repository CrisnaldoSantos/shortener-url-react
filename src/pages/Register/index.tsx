import { LineButton } from 'components/Form/Button/LineButton';
import { Input } from 'components/Form/Input';
import { ImageBrandForm } from 'components/Structure/ImageBrandForm';
import { SignLink } from 'components/Structure/SignLink';
import { SignContainer } from 'containers/SignContainer';
import { Col, Form, Row } from 'react-bootstrap';

export function Register() {
  return (
    <SignContainer>
      <Row className="w-100 d-flex justify-content-center">
        <Col sm={12} md={4}>
          <Form className="shadow mt-1 bg-white py-4 px-4 rounded">
            <ImageBrandForm />
            <Input label="Email" name="registerEmail" type="email" size="lg" />
            <Input label="Senha" name="teste-base" type="password" size="lg" />
            <Input
              label="Confirmação de senha"
              name="teste-base"
              type="password"
              size="lg"
            />
            <LineButton type="submit" size="lg" className="mt-3 mb-2">
              Registrar
            </LineButton>
            <SignLink url="/login">Já possuo uma conta.</SignLink>
          </Form>
        </Col>
      </Row>
    </SignContainer>
  );
}
