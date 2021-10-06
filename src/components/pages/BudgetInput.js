import { useState } from "react"

const BudgetInput = ({ onQuery }) => {
  const [budget, setBudget] = useState(0)

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      onQuery(budget)
    }
  }

  return (
    <div className="row">
      <h2>Budget Calculator</h2>
      <div className="form-group">
        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <input type="text" name="budget" className="form-control" onKeyDown={handleKeyDown} placeholder="Enter your budget here.... " onChange={e => setBudget(e.target.value)} />
          <span className="input-group-text">.00</span>
        </div>
      </div>
    </div>
  )
}

export default BudgetInput
