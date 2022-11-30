/*eslint-disable*/
import React from 'react';
import calculate from '../logic/calculate';

class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }


  render() { 
    const { total, next, operation } = this.state;
    const buttonPress = (e) => {
      this.setState(calculate(this.state, e.target.innerText));
    };
    // const handleEven = (elem) => {
    //   console.log(elem.keyCode);
    // };
    return (
      <div className="calculator-container">
        <table>
          <tr className="table-row">
            <th colSpan="4" className="table-header">
              <p>{total}</p>
              <p>{operation}</p>
              <p>{next}</p>

            </th>
          </tr>

          <tr>
            <td><p onClick={buttonPress}>AC</p></td>
            <td><p onClick={buttonPress}>+/-</p></td>
            <td><p onClick={buttonPress}>%</p></td>
            <td className="operator"><p onClick={buttonPress}>+</p></td>
          </tr>

          <tr>
            <td><p onClick={buttonPress}>7</p></td>
            <td><p onClick={buttonPress}>8</p></td>
            <td><p onClick={buttonPress}>9</p></td>
            <td className="operator"><p onClick={buttonPress}>*</p></td>
          </tr>

          <tr>
            <td><p onClick={buttonPress}>4</p></td>
            <td><p onClick={buttonPress}>5</p></td>
            <td><p onClick={buttonPress}>6</p></td>
            <td className="operator"><p onClick={buttonPress}>-</p></td>
          </tr>

          <tr>
            <td><p onClick={buttonPress}>1</p></td>
            <td><p onClick={buttonPress}>2</p></td>
            <td><p onClick={buttonPress}>3</p></td>
            <td className="operator"><p onClick={buttonPress}>+</p></td>
          </tr>

          <tr>
            <td colSpan="2"><p onClick={buttonPress}>0</p></td>
            <td><p  onClick={buttonPress}>.</p></td>
            <td className="operator"><p onClick={buttonPress}>=</p></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Calculate;
