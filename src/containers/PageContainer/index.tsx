/* eslint-disable no-underscore-dangle */
import { Navbar } from 'components/Structure/Navbar';
import { Container } from 'react-bootstrap';
import { getAccessToken, getUserData } from 'utils/dataStorage';
import { refreshData } from 'store/auth/auth.ducks';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { useEffect } from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  const storageData = getUserData();
  const token = getAccessToken();
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (storageData.userId !== user._id && token) {
      const { userId, email } = storageData;
      dispatch(refreshData({ _id: userId, email }));
    }
  }, [dispatch, storageData, token, user._id]);

  return (
    <>
      <Navbar />
      <Container fluid className="mt-2">
        {children}
      </Container>
    </>
  );
}
