import { render } from '@testing-library/react';
import Quotes from '../pages/quote';

describe('display the quotes page', () => {
  it('check the contents of the quote page', () => {
    const { container } = render(
      <Quotes />,
    );
    expect(container).toMatchSnapshot();
  });
});
