import DataContext from "../Data/dataContext"
import Item from "./Item"
import "./Transaction.css"

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
        <DataContext.Consumer>
            {value=><p>{value}</p>}
        </DataContext.Consumer>
        </div>
    );
}

export default Transaction