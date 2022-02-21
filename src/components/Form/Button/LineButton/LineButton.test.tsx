import { render, screen } from '@testing-library/react';
import { LineButton } from '.';

afterEach(() => {
  jest.clearAllMocks();
});

describe('LineButton Component', () => {
  it('deve renderizar corretamente o LineButton', async () => {
    const TextButton = 'TextButton';
    render(<LineButton>{TextButton}</LineButton>);

    const buttonTest = screen.getByRole('button', { name: TextButton });
    expect(buttonTest).toBeInTheDocument();
  });
});
