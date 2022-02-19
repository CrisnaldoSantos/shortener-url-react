import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getAnalytics } from 'store/url/url.ducks';

export interface AnalyticData {
  _id: string;
  user_fk: string;
  hits: number;
  destinationUrl: string;
  shortUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
export function AnalyticsTable() {
  const { analyticsUrls } = useSelector((state: RootState) => state.url);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnalytics());
  }, [dispatch]);

  return (
    <Table striped bordered hover responsive variant="light">
      <thead>
        <tr>
          <th>Top</th>
          <th>Url</th>
          <th>Total de Acessos</th>
        </tr>
      </thead>
      <tbody>
        {analyticsUrls.map((url: AnalyticData, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{url.shortUrl}</td>
            <td>{url.hits}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
