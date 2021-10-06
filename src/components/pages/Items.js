import Item from "./Item"
import BudgetInput from "./BudgetInput"

const Items = () => {
  return (
    <div className="row main">
      <BudgetInput />
      <div className="row content">
        <Item />
        <a href="#">Test</a>
      </div>
    </div>
  )
}

export default Items
