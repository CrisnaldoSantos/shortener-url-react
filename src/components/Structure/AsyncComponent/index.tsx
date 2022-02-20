import { ReactNode } from 'react';
import { Spinner } from 'react-bootstrap';

interface AsyncComponentProps {
  children: ReactNode;
  loading: boolean;
}
export function AsyncComponent({ children, loading }: AsyncComponentProps) {
  return (
    <>
      {loading ? (
        <Spinner animation="grow" variant="primary" />
      ) : (
        <>{children}</>
      )}
    </>
  );
}
