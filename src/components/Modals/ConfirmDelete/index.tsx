import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteUserUrl } from 'store/url/url.ducks';

interface ModalConfirmDeleteProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

export function ModalConfirmDelete({
  isOpen,
  onClose,
  id,
}: ModalConfirmDeleteProps) {
  const dispatch = useDispatch();

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirma a exclusão?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Deseja proseguir com a exclusão desta url?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={() => dispatch(deleteUserUrl(id))}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
