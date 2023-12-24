import Item from "./Item"
import "./Transaction.css"

const Transaction =()=> {
    const data = [
        {id:1, title:"ค่ารักษาพยาบาล", amount:"2000"},
        {id:2, title:"ค่าเช่า", amount:"20000"},
        {id:3, title:"ค่าเดินทาง", amount:"1000"},
        {id:4, title:"ค่าเดินทาง", amount:"1000"},
        {id:5, title:"ค่าเดินทาง", amount:"1000"},
        {id:6, title:"ค่าเดินทาง", amount:"1000"},
        {id:7, title:"ค่าเดินทาง", amount:"1000"},
        {id:8, title:"ค่าเดินทาง", amount:"1000"},
    ]
    return (
        <ul className="item-list">
            {data.map((element) => {
                return (
                    <Item title={element.title} amount={element.amount}/>
                )
            })}
        </ul>
    )
}

export default Transaction