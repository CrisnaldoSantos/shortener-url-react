import { render, screen } from '@testing-library/react';
import { Logo } from '.';

describe('Logo Component', () => {
  test('deve exibir o texto presente no componente', () => {
    const text = 'SuaShortener';
    render(<Logo />);

    const findText = screen.getByText(text);

    expect(findText).toBeInTheDocument();
  });
});
