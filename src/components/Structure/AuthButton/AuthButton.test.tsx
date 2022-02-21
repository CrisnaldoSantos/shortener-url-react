import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AuthButton } from '.';

const mockStore = configureStore();
let store;

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('AuthButton Component', () => {
  it('deve renderizar corretamente o AuthButton no caso de um usuário não logado, exibindo os botões de entrar e registrar', () => {
    const initialState = {
      auth: {
        loginSuccess: false,
      },
    };
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <AuthButton />
      </Provider>
    );

    const enterButton = screen.getByRole('button', {
      name: /entrar/i,
    });

    const registerButton = screen.getByRole('button', {
      name: /registrar/i,
    });

    expect(enterButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });

  it('não deve renderizar os botões AuthButton no caso de um usuário logado', () => {
    const initialState = {
      auth: {
        loginSuccess: true,
      },
    };
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <AuthButton />
      </Provider>
    );

    const enterButton = screen.queryByRole('button', {
      name: /entrar/i,
    });

    const registerButton = screen.queryByRole('button', {
      name: /registrar/i,
    });

    expect(enterButton).not.toBeInTheDocument();
    expect(registerButton).not.toBeInTheDocument();
  });
});
