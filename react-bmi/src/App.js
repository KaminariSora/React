import { useMemo, useState } from 'react';
import './App.css';
import './style/container.css';

const defaultHeight = 0
const defaultWeight = 0

function App() {
  const [weight, setWeight] = useState(defaultWeight);
  const [height, setHeight] = useState(defaultHeight);

  function onChangeWeight(event) {
    const inputWeight = event.target.value
    setWeight(inputWeight)
  }

  function onChangeHeight(event) {
    const inputHeight = event.target.value
    setHeight(inputHeight)
  }

  const calculateBMI = useMemo(() => { //useMemo จะทำให้ calculate เป็น pure component ทำให้ render ทีเดียว ลดการทำงานของระบบ
    if (weight === 0 || height === 0) {
      return "Input require!"
    }
    return (weight / (height / 100))
  }, [weight, height])
  return (
    <div className="container">
      <div className="head">
        <h1>BMI Project</h1>
      </div>
      <label>Weight : {weight} kg</label>
      <input
        onChange={onChangeWeight}
        type="range"
        min="1"
        max="240"
      >
      </input>
      <label>Height : {height} cm</label>
      <input
        onChange={onChangeHeight}
        type="range"
        min="1"
        max="240">
      </input>
      <div className="Output">
        <h5>Your BMI is</h5>
        <p>Your BMI is : {calculateBMI}</p>
      </div>
    </div>
  );
}

export default App;
