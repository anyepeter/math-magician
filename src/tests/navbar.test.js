import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../pages/navbar';

describe('navbar render links', () => {
  it('check if it rendering or not', () => {
    const { container } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
