import Item from "./Item"
import "./Transaction.css"

const Transaction =(props)=> {
    const {items} = props
    return (
        <ul className="item-list">
            {items.map((element) => {
                return (
                    <Item title={element.title} amount={element.amount}/>
                )
            })}
        </ul>
    )
}

export default Transaction