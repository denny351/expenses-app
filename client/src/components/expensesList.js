import React from 'react'

const expensesList = (props) => {

  const mapExpenses = props.expenses.map((item, i) => (
    <div key={i} className="expenseItem">
      <div className="expenseItemHead">
        <span><strong>Name: </strong>{item.name}</span>
        <span style={{marginLeft:10}}><strong>Price: $</strong>{item.value}</span>
      </div>
      <div className="expenseDescription">
        {item.description}
      </div>
    </div>
  ))

  return (
    <div>
      {mapExpenses}
    </div>
  )
}

export default expensesList
