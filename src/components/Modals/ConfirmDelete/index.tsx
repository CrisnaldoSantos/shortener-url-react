import { Modal, Button } from 'react-bootstrap';

interface ModalConfirmDeleteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalConfirmDelete({
  isOpen,
  onClose,
}: ModalConfirmDeleteProps) {
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
        <Button variant="primary" onClick={onClose}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
