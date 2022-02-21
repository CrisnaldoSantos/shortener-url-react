import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import { ModalConfirmDelete } from '.';

const mockStore = configureStore();
let store;

afterEach(() => {
  jest.clearAllMocks();
});

describe('ModalConfirmDelete Component', () => {
  it('deve renderizar corretamente o ModalConfirmDelete', async () => {
    const initialState = {};
    store = mockStore(initialState);
    const idTest = '123';
    render(
      <Provider store={store}>
        <ModalConfirmDelete isOpen id={idTest} onClose={() => {}} />
      </Provider>
    );

    const buttonClose = screen.getByRole('button', {
      name: /close/i,
    });

    const buttonConfirm = screen.getByRole('button', {
      name: /confirmar/i,
    });

    const buttonCancel = screen.getByRole('button', {
      name: /cancelar/i,
    });

    expect(buttonClose).toBeInTheDocument();
    expect(buttonConfirm).toBeInTheDocument();
    expect(buttonCancel).toBeInTheDocument();
  });

  it('deve executar a função onClose passada ao componente ModalConfirmDelete ao clicar no botão fechar', async () => {
    const initialState = {};
    store = mockStore(initialState);
    const idTest = '123';

    const handleOnClose = jest.fn();

    render(
      <Provider store={store}>
        <ModalConfirmDelete isOpen id={idTest} onClose={handleOnClose} />
      </Provider>
    );

    const buttonClose = screen.getByRole('button', {
      name: /close/i,
    });

    userEvent.click(buttonClose);
    expect(handleOnClose).toBeCalled();
  });

  it('deve executar a função onClose passada ao componente ModalConfirmDelete ao clicar no botão cancelar', async () => {
    const initialState = {};
    store = mockStore(initialState);
    const idTest = '123';

    const handleOnClose = jest.fn();

    render(
      <Provider store={store}>
        <ModalConfirmDelete isOpen id={idTest} onClose={handleOnClose} />
      </Provider>
    );

    const buttonCancel = screen.getByRole('button', {
      name: /cancelar/i,
    });

    userEvent.click(buttonCancel);
    expect(handleOnClose).toBeCalled();
  });
});
