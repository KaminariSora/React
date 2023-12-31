import Item from "./Item"
import "./Transaction.css"
import './ReportComponent.css'

const Transaction =(props)=> {
    const {items} = props
    return (
        <div>
        <ul className="item-list">
            {items.map((element) => {
                return (
                    <Item title={element.title} amount={element.amount}/>
                )
            })}
        </ul>
        </div>
    );
}

export default Transaction