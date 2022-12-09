/*eslint-disable*/
import { useState } from 'react';
import calculate from '../logic/calculate';

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
      <div className="calculator-container">
        <h1>Lets do some maths</h1>
        <table>
          <thead>
          <tr className="table-row">
            <th colSpan="4" className="table-header"  >
              <div >
              <span className='tectd' data-testid= "answer">{total}</span>
              <span className='tectd'>{operation}</span>
              <span className='tectd'>{next}</span>
              </div>
            </th>
          </tr>
          </thead>

<tbody>
<tr>
            <td><p onClick={buttonPress} data-testid= "AC">AC</p></td>
            <td><p onClick={buttonPress} data-testid= "+/-">+/-</p></td>
            <td><p onClick={buttonPress} data-testid= "%">%</p></td>
            <td className="operator"><p onClick={buttonPress} data-testid= "÷"
             >÷</p></td>
          </tr>

          <tr>
            <td><p onClick={buttonPress} data-testid= "7">7</p></td>
            <td><p onClick={buttonPress} data-testid= "8">8</p></td>
            <td><p onClick={buttonPress} data-testid= "9">9</p></td>
            <td className="operator"><p onClick={buttonPress} data-testid= "*">*</p></td>
          </tr>

          <tr>
            <td><p onClick={buttonPress} data-testid= "4">4</p></td>
            <td><p onClick={buttonPress} data-testid= "5">5</p></td>
            <td><p onClick={buttonPress} data-testid= "6">6</p></td>
            <td className="operator"><p onClick={buttonPress} data-testid= "-">-</p></td>
          </tr>

          <tr>
            <td><p onClick={buttonPress} data-testid= "1">1</p></td>
            <td><p onClick={buttonPress} data-testid= "2">2</p></td>
            <td><p onClick={buttonPress} data-testid= "3">3</p></td>
            <td className="operator"><p onClick={buttonPress} data-testid= "+">+</p></td>
          </tr>

          <tr>
            <td colSpan="2"><p onClick={buttonPress} data-testid= "0">0</p></td>
            <td><p  onClick={buttonPress} data-testid= ".">.</p></td>
            <td className="operator"><p onClick={buttonPress} data-testid= "=">=</p></td>
          </tr>
</tbody>
        
        </table>
      </div>
      </>
    );
  
}
export default Calculator;
