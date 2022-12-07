/*eslint-disable*/
import { useState } from 'react';
import calculate from '../logic/calculate';
import Navigation from '../pages/navbar';

const Calculator =() => {
   
  const items = {
    total: 0,
    next: null,
    operation: null
  }
  const [state, setState] = useState(items);



    const { total, next, operation } = state;
    const buttonPress = (e) => {
      setState(calculate(state, e.target.innerText));
    };
    
    return (
      <>
      <div> <Navigation /></div>

     
      <div className="calculator-container">
        <h1>Lets do some maths</h1>
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
            <td className="operator"><p onClick={buttonPress}>÷</p></td>
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
      </>
    );
  
}
export default Calculator;
