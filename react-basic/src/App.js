import Transaction from "./Components/Transaction";
import FormComponent from "./Components/FormComponent";
import "./Components/App.css"
import "./Components/FormComponent.css"
import { useState } from "react";

function App() {
  const design = { color: "#fff", textAlign: "start", fontSize: "1.5rem" }
  const initData = [
    { id: 1, title: "ค่ารักษาพยาบาล", amount: "2000" },
    { id: 2, title: "ค่าเช่า", amount: "20000" },
    { id: 3, title: "ค่าเดินทาง", amount: "1000" },
  ]
  const [items,setItems] = useState([])
  const OnAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem,...prevItem]
    })
  }
  return (
    <section style={design}>
      <FormComponent OnAddItem={OnAddNewItem} />
      <Transaction items={items} />

    </section>
  );
}

export default App;
