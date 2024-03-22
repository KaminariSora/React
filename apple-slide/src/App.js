import './App.css';
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const style = {
  height: '200px',
  width: '200px',
  background: 'blue',
  duration: 2
}

function App() {
  useGSAP(() => {
    gsap.to('#blue-box', {
      x: 500,
      repeat: -1,
      yoyo: true,
      rotation: 360
    })
  }, [])
  return (
    <div className='App'>
      <div id='blue-box' style={style}></div>
    </div>
  );
}

export default App;
