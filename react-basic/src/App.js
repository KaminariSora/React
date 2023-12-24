import Transaction from "./Components/Transaction";
import "./Components/App.css"

const Title =() => <h1>โปรแกรมบัญชี รายรับ-รายจ่าย</h1>

function App() {
  const design = {color:"#fff", textAlign:"center", fontSize:"1.5rem"}
  return (
    <section className="contianer" style={design}>
      <Title/>
      <Transaction/>
    </section>
  );
}

export default App;
