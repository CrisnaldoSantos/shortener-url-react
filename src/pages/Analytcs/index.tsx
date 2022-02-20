import { AnalyticsTable } from 'components/Contexts/Analytics/Table';
import { PageContainer } from 'containers/PageContainer';
import { Container, Form } from 'react-bootstrap';

export function Analytcs() {
  return (
    <PageContainer>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center w-100 mt-5"
      >
        <Form.Text className="text-dark fs-2 mb-4 ">
          Top 100 urls acessadas
        </Form.Text>
        <AnalyticsTable />
      </Container>
    </PageContainer>
  );
}
