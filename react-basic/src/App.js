import Transaction from "./Components/Transaction";
import FormComponent from "./Components/FormComponent";
import "./Components/App.css"
import "./Components/FormComponent.css"
import { useState, useEffect, useReducer } from "react";
import DataContext from "./Data/dataContext";
import ReportComponent from "./Components/ReportComponent";
import { element } from "prop-types";

function App() {
  const design = { textAlign: "start", fontSize: "1.5rem", overflow: "scroll" }

  const intitState = [
    { id: 1, title: "ค่าเข่าบ้าน", amount: -2000 },
    { id: 2, title: "เงินเดือน", amount: 12000 },
    { id: 3, title: "ค่าเดินทาง", amount: -500 },
    { id: 4, title: "ขายของ", amount: 2000 },

  ]
  const [items, setItems] = useState(intitState)

  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)
  const OnAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  }
  useEffect(() => {
    const amounts = items.map(items => items.amount)
    const income = amounts.filter(element => element > 0).reduce((total, element) => total += element, 0)
    const expense = (amounts.filter(element => element < 0).reduce((total, element) => total += element, 0)) * -1
    setReportIncome(income)
    setReportExpense(expense)
    console.log(amounts)
    console.log("รายได้", income)
    console.log("รายจ่าย", expense)
  }, [items, reportIncome, reportExpense])


  const [showReport, setShowReport] = useState(false)
  const reducer = (state, action) => {
    switch (action.type) {
      case "show":
        return setShowReport(true)
      case "hide":
        return setShowReport(false)
    }
  }
  const [result, dispatch] = useReducer(reducer, showReport)
  return (
    <DataContext.Provider value={
      {
        income: reportIncome,
        expense: reportExpense
      }
    }>
      <div style={design}>
        {showReport && <ReportComponent/>}
        <FormComponent OnAddItem={OnAddNewItem} />
        <Transaction items={items} />
      </div>
      <div align="center">
        <h1>{result}</h1>
        <button onClick={() => dispatch({ type: "show" })}>แสดง</button>
        <button onClick={() => dispatch({ type: "hide" })}>ซ่อน</button>
      </div>
    </DataContext.Provider>
  );
}

export default App;
