import { useState } from 'react';
import './Calculator.css'; 

function Display(props) {
  let textToShow = props.value;
  if (textToShow === '') {
    textToShow = '0';
  }

  return (
    <div className="calculator-display">
      {textToShow}
    </div>
  );
}

function Button(props) {
  let btnClass = "calc-button " + props.colorClass;
  
  if (props.isDoubleSize) {
    btnClass = btnClass + " span-2";
  }

  return (
    <button
      className={btnClass}
      onClick={() => props.onClick(props.label)}
    >
      {props.label}
    </button>
  );
}

export default function Calculator() {
  const [expression, setExpression] = useState('');
  const [ans, setAns] = useState('');
  const [isResult, setIsResult] = useState(false);

  function handleButtonClick(value) {
    const operators = ['+', '-', '*', '/'];

    if (value === 'Clear') {
      setExpression('');
      setIsResult(false);
      return; 
    }

    if (value === 'Delete') {
      if (expression === 'Lỗi') {
        setExpression('');
      } else {
        setExpression(expression.toString().slice(0, -1));
      }
      setIsResult(false);
      return;
    }

    if (value === '=') {
      if (expression === '') return; 
      try {
        const result = eval(expression).toString();
        setExpression(result);
        setAns(result);
        setIsResult(true);
      } catch (error) {
        setExpression('Lỗi');
        setIsResult(true);
      }
      return;
    }

    if (value === 'Ans') {
      if (ans === '') return;
      if (isResult === true || expression === 'Lỗi') {
        setExpression(ans);
      } else {
        setExpression(expression + ans);
      }
      setIsResult(false);
      return;
    }

    if (isResult === true || expression === 'Lỗi') {
      if (operators.includes(value) && expression !== 'Lỗi') {
        setExpression(expression + value);
      } else {
        setExpression(value);
      }
      setIsResult(false);
    } else {
      setExpression(expression + value);
    }
  }

  const buttons = [
    { label: 'Clear', colorClass: 'btn-red', isDoubleSize: false },
    { label: 'Delete', colorClass: 'btn-yellow', isDoubleSize: false }, 
    { label: 'Ans', colorClass: 'btn-purple', isDoubleSize: false }, 
    { label: '/', colorClass: 'btn-blue', isDoubleSize: false },
    
    { label: '7', colorClass: 'btn-gray', isDoubleSize: false }, 
    { label: '8', colorClass: 'btn-gray', isDoubleSize: false }, 
    { label: '9', colorClass: 'btn-gray', isDoubleSize: false }, 
    { label: '*', colorClass: 'btn-blue', isDoubleSize: false },
    
    { label: '4', colorClass: 'btn-gray', isDoubleSize: false }, 
    { label: '5', colorClass: 'btn-gray', isDoubleSize: false }, 
    { label: '6', colorClass: 'btn-gray', isDoubleSize: false }, 
    { label: '-', colorClass: 'btn-blue', isDoubleSize: false },
    
    { label: '1', colorClass: 'btn-gray', isDoubleSize: false }, 
    { label: '2', colorClass: 'btn-gray', isDoubleSize: false }, 
    { label: '3', colorClass: 'btn-gray', isDoubleSize: false }, 
    { label: '+', colorClass: 'btn-blue', isDoubleSize: false },
    
    { label: '0', colorClass: 'btn-gray', isDoubleSize: true },
    { label: '.', colorClass: 'btn-gray', isDoubleSize: false }, 
    { label: '=', colorClass: 'btn-green', isDoubleSize: false }
  ];

  return (
    <div className="calculator-container">
      <Display value={expression} />
      <div className="buttons-grid">
        {buttons.map((btn) => (
          <Button 
            key={btn.label} 
            label={btn.label} 
            colorClass={btn.colorClass} 
            isDoubleSize={btn.isDoubleSize} 
            onClick={handleButtonClick} 
          />
        ))}
      </div>
    </div>
  );
}