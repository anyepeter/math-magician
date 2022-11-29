import React from 'react';

class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div className="calculator-container">
        <table>
          <tr className="table-row">
            <th colSpan="4" className="table-header">
              {value}
            </th>
          </tr>

          <tr>
            <td><p>AC</p></td>
            <td><p>+/-</p></td>
            <td><p>%</p></td>
            <td className="operator"><p>+</p></td>
          </tr>

          <tr>
            <td><p>7</p></td>
            <td><p>8</p></td>
            <td><p>9</p></td>
            <td className="operator"><p>*</p></td>
          </tr>

          <tr>
            <td><p>4</p></td>
            <td><p>5</p></td>
            <td><p>6</p></td>
            <td className="operator"><p>-</p></td>
          </tr>

          <tr>
            <td><p>1</p></td>
            <td><p>2</p></td>
            <td><p>3</p></td>
            <td className="operator"><p>+</p></td>
          </tr>

          <tr>
            <td colSpan="2"><p>0</p></td>
            <td><p>.</p></td>
            <td className="operator"><p>=</p></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Calculate;
