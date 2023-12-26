import Transaction from "./Components/Transaction";
import FormComponent from "./Components/FormComponent";
import "./Components/App.css"
import "./Components/FormComponent.css"
import { useState } from "react";

function App() {
  const design = { color: "#fff", textAlign: "start", fontSize: "1.5rem" }
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
