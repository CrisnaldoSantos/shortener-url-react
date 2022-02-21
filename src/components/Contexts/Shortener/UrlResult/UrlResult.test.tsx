import { render, screen } from '@testing-library/react';
import { UrlResult } from '.';

describe('UrlResult Component', () => {
  test('deve exibir o texto passado por propriedade caso diferente de undefined e vazio', () => {
    const text = 'urlresult';
    render(<UrlResult url={text} />);

    const urlResultText = screen.getByText(text);

    expect(urlResultText).toBeInTheDocument();
  });
});
