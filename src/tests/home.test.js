import { render } from '@testing-library/react';
import Home from '../pages/home';

describe('display the home page', () => {
  it('check the contents of the home page', () => {
    const { container } = render(
      <Home />,
    );
    expect(container).toMatchSnapshot();
  });
});
