import { PageContainer } from 'containers/PageContainer';
import { Container, Form, Image } from 'react-bootstrap';
import shortImg from 'assets/short-url.svg';
import { UrlResult } from 'components/Contexts/Shortener/UrlResult';
import { LineButton } from 'components/Form/Button/LineButton';
import { Input } from 'components/Form/Input';

export function Shortener() {
  return (
    <PageContainer>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center w-100 mt-5"
      >
        <Image fluid src={shortImg} style={{ width: '200px' }} />
        <Form className="mt-3 w-75">
          <Input
            name="url-base"
            type="text"
            placeholder="Insira a URL a ser encurtada"
            size="lg"
          />
          <LineButton type="submit" size="lg">
            Encurtar
          </LineButton>
        </Form>
        <UrlResult url="" />
      </Container>
    </PageContainer>
  );
}
