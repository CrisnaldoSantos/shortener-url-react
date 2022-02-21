import { render, screen } from '@testing-library/react';
import { ImageBrandForm } from '.';

describe('ImageBrandForm Component', () => {
  test('deve exibir o texto presente no componente', () => {
    const text = 'SuaShortener';
    render(<ImageBrandForm />);

    const findText = screen.getByText(text);

    expect(findText).toBeInTheDocument();
  });
});
