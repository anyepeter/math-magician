import { fireEvent, render } from '@testing-library/react';
import Calculator from '../components/calculator';

describe('calculator', () => {
  it('check the button click', () => {
    const { getByTestId } = render(<Calculator />);
    const numberButton = getByTestId('5');
    const operationButton = getByTestId('+');
    const numberButton2 = getByTestId('2');
    const equalButton = getByTestId('=');

    fireEvent.click(numberButton, { target: { innerText: '5' } });
    fireEvent.click(operationButton, { target: { innerText: '+' } });
    fireEvent.click(numberButton2, { target: { innerText: '9' } });
    fireEvent.click(equalButton, { target: { innerText: '=' } });
    expect(getByTestId('answer').innerHTML).toBe('14');
  });
});
