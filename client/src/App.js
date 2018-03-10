import React, { Component } from 'react';
import axios from 'axios';

import ExpensesList from './components/expensesList';

class App extends Component {
	state = {
		expenses: []
	};

	componentDidMount() {
		this.getAllExpenses();
	}

	getAllExpenses = () => {
		axios.get('/api/expenses').then(res => {
			this.setState({ expenses: res.data });
		});
  };
  
	render() {
		return (
			<div className="appContainer">
				<h1>Expense Tracker</h1>
				<input
					className="search"
					type="text"
					placeholder="Search here"
				/>
				<form className="newForm" onSubmit={this.submitForm}>
					<input type="text" placeholder="Name" />
					<input type="text" placeholder="Description" />
					<input type="number" placeholder="Price" />
					<button type="submit">Add</button>
				</form>
        <ExpensesList expenses={this.state.expenses}/>
			</div>
		);
	}
}

export default App;
