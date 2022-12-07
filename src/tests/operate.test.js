import operate from '../logic/operate';

describe('operate', () => {
  it('do the + calculation correctly', () => {
    // Arrange

    // Act
    const data = operate(3, 9, '+');

    // Assert
    expect(data).toBe('12');
  });
  it('do the - calculation correctly', () => {
    // Arrange

    // Act
    const data = operate(3, 9, '-');

    // Assert
    expect(data).toBe('-6');
  });

  it('do the * calculation correctly', () => {
    // Arrange

    // Act
    const data = operate(3, 9, '*');

    // Assert
    expect(data).toBe('27');
  });

  it('do the ÷ calculation correctly', () => {
    // Arrange

    // Act
    const data = operate(6, 3, '÷');

    // Assert
    expect(data).toBe('2');
  });

  it('division by zero working correctly', () => {
    // Arrange

    // Act
    const data = operate(2, 0, '÷');
    expect(data).toBe("Can't divide by 0.");
  });

  it('modulo by zero working correctly', () => {
    // Arrange

    // Act
    const data = operate(2, 0, '%');
    expect(data).toBe("Can't find modulo as can't divide by 0.");
  });
});
