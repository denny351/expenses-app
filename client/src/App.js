import React, { Component } from 'react';
import axios from 'axios';

import ExpensesList from './components/expensesList';

class App extends Component {
	state = {
		expenses: [],
		formdata: {
			name: '',
			description: '',
			value: null
		},
		total: null
	};

	componentDidMount() {
		this.getAllExpenses();
	}

	getAllExpenses = () => {
		axios.get('/api/expenses').then(res => {
			this.setState({ expenses: res.data });
			this.getTotal();
		});
	};

	getTotal = () => {
		let sum = null;
		this.state.expenses.forEach(item => {
			sum += item.value;
		});
		this.setState({ total: sum });
	};

	searchHandler = e => {
		const searchInput = e.target.value;
		if (searchInput === '') {
			this.getAllExpenses();
		} else {
			axios.get(`/api/expenses?search=${searchInput}`).then(res => {
				this.setState({ expenses: res.data });
			});
		}
	};

	handleFormInput = (event, name) => {
		const newFormData = {
			...this.state.formdata
		};
		newFormData[name] = event.target.value;
		this.setState({ formdata: newFormData });
	};

	submitForm = e => {
		e.preventDefault();
		axios.post('/api/expenses', this.state.formdata).then(() => {
			this.getAllExpenses();
		});
  };

	render() {
		return (
			<div className="appContainer">
				<h1>Expense Tracker</h1>
				<h4>Total value so far: ${this.state.total}</h4>
				<input
					className="search"
					onKeyUp={this.searchHandler}
					type="text"
					placeholder="Search for an expense"
				/>

				<p style={{ margin: 0 }}>Add a new expense</p>
				<form className="newForm" onSubmit={this.submitForm}>
					<input
						type="text"
						className="nameInput"
						placeholder="Name"
						onChange={event => this.handleFormInput(event, 'name')}
					/>
					<input
						type="text"
						className="descriptionInput"
						placeholder="Description"
						onChange={event => this.handleFormInput(event, 'description')}
					/>
					<input
						type="number"
						className="numberInput"
						placeholder="Price"
						onChange={event => this.handleFormInput(event, 'value')}
					/>
					<span>
						<button type="submit">Add</button>
					</span>
				</form>

				<ExpensesList expenses={this.state.expenses} getAll={this.getAllExpenses}/>
			</div>
		);
	}
}

export default App;
