/* eslint-disable no-underscore-dangle */
import { ModalConfirmDelete } from 'components/Modals/ConfirmDelete';
import { AsyncComponent } from 'components/Structure/AsyncComponent';
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getUserUrls, setUserModalDelete } from 'store/url/url.ducks';

export interface AnalyticData {
  _id: string;
  user_fk: string;
  hits: number;
  destinationUrl: string;
  shortUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
export function MyUrlsTable() {
  const { userUrls, modalDelete } = useSelector(
    (state: RootState) => state.url
  );
  const { loading } = useSelector((state: RootState) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserUrls());
  }, [dispatch]);

  const [selectedId, setSelectedId] = useState('');
  const prefix = process.env.REACT_APP_API_BASE_PATH;

  function handleDelete(id: string) {
    setSelectedId(id);
    dispatch(setUserModalDelete(true));
  }

  return (
    <>
      <ModalConfirmDelete
        isOpen={modalDelete}
        onClose={() => dispatch(setUserModalDelete(false))}
        id={selectedId}
      />
      <AsyncComponent loading={loading === 1}>
        <Table striped bordered hover responsive variant="white">
          <thead>
            <tr>
              <th>Top</th>
              <th>Url</th>
              <th>Total de Acessos</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {userUrls.map((url: AnalyticData, index) => (
              <tr key={url.shortUrl}>
                <td>{index + 1}</td>
                <td>{`${prefix}/${url.shortUrl}`}</td>
                <td>{url.hits}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(url._id)}
                  >
                    x
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </AsyncComponent>
    </>
  );
}
