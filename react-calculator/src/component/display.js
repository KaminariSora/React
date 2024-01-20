import React, { useState } from 'react'

const Display = () => {
    const [result, setResult] = useState(0)

    const handleButtonClick = (value) => {
        if(value === '=') {
            setResult(eval(result).toString())
        } else if (value === 'clear') {
            setResult('0')
        } else {
            setResult((PreventResult) => (PreventResult === '0' ? value : PreventResult + value))
        }
    }
    
    return (
        <div className="container">
            <div className="result">
                <h1>{result}</h1>
            </div>
            <div className="buttons">
                <div className="number">
                    <button onClick={() => handleButtonClick('7')}>7</button>
                    <button onClick={() => handleButtonClick('8')}>8</button>
                    <button onClick={() => handleButtonClick('9')}>9</button>

                    <button onClick={() => handleButtonClick('4')}>4</button>
                    <button onClick={() => handleButtonClick('5')}>5</button>
                    <button onClick={() => handleButtonClick('6')}>6</button>
                    
                    <button onClick={() => handleButtonClick('1')}>1</button>
                    <button onClick={() => handleButtonClick('2')}>2</button>
                    <button onClick={() => handleButtonClick('3')}>3</button>

                    <button onClick={() => handleButtonClick('.')}>.</button>
                    <button onClick={() => handleButtonClick('0')}>0</button>
                    <button onClick={() => handleButtonClick('clear')}>clear</button>
                </div>
                <div className="operation">
                    <button onClick={() => handleButtonClick('+')}>+</button>
                    <button onClick={() => handleButtonClick('-')}>-</button>
                    <button onClick={() => handleButtonClick('*')}>*</button>
                    <button onClick={() => handleButtonClick('/')}>/</button>
                    <button onClick={() => handleButtonClick('=')}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Display