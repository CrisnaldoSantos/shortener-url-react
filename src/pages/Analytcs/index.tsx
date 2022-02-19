import { AnalyticsTable } from 'components/Contexts/Analytics/Table';
import { PageContainer } from 'containers/PageContainer';
import { Container } from 'react-bootstrap';

export function Analytcs() {
  return (
    <PageContainer>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center w-100 mt-5"
      >
        <h1>Analytcs</h1>
        <AnalyticsTable />
      </Container>
    </PageContainer>
  );
}
