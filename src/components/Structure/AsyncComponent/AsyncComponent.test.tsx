import { render, screen } from '@testing-library/react';
import { AsyncComponent } from '.';

afterEach(() => {
  jest.clearAllMocks();
});

describe('AsyncComponent Component', () => {
  it('deve renderizar corretamente o AsyncComponent exibindo o children quando a propriedade loading é false', () => {
    const loading = false;
    const textTest = 'teste';
    render(<AsyncComponent loading={loading}>{textTest}</AsyncComponent>);

    const getChildren = screen.getByText(textTest);
    expect(getChildren).toBeInTheDocument();
  });

  it('não deve renderizar o Spinner quando a children quando a propriedade loading é true', () => {
    const loading = true;
    const textTest = 'teste';
    render(<AsyncComponent loading={loading}>{textTest}</AsyncComponent>);

    const getChildren = screen.queryByText(textTest);
    expect(getChildren).not.toBeInTheDocument();
  });
});
