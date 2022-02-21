import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AnalyticsTable } from '.';

const mockStore = configureStore();
let store;

afterEach(() => {
  jest.clearAllMocks();
});

describe('AnalyticsTable Component', () => {
  it('deve renderizar corretamente o AnalyticsTable', async () => {
    const initialState = {
      loading: {
        loading: 0,
      },
      url: {
        analyticsUrls: [],
        urlResponse: '',
        userUrls: [],
        modalDelete: false,
      },
    };
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <AnalyticsTable />
      </Provider>
    );

    const getTitle1 = screen.getByRole('columnheader', {
      name: /top/i,
    });

    const getTitle2 = screen.getByRole('columnheader', {
      name: /total de acessos/i,
    });

    expect(getTitle1).toBeInTheDocument();
    expect(getTitle2).toBeInTheDocument();
  });
});
