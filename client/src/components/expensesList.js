import React from 'react'

const expensesList = (props) => {

  const mapExpenses = props.expenses.map((item, i) => (
    <div key={i} style={{maxWidth:400}}>
      <div>
        <span><strong>Name: </strong>{item.name}</span>
        <span style={{marginLeft:30}}><strong>Price: </strong>{item.value}</span>
      </div>
      <div>
        <strong>Description: </strong>{item.description}
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
