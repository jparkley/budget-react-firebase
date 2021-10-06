const BudgetInput = () => {
  return (
    <>
      <h2>Budget Calculator</h2>
      <div className="form-group">
        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <input type="text" name="budget" className="form-control" placeholder="Enter your budget here.... " />
          <span className="input-group-text">.00</span>
        </div>
      </div>
    </>
  )
}

export default BudgetInput
