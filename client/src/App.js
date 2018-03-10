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
		}
	};

	componentDidMount() {
		this.getAllExpenses();
	}

	getAllExpenses = () => {
		axios.get('/api/expenses').then(res => {
			this.setState({ expenses: res.data });
		});
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

	handleInput = (event, name) => {
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

				<input
					className="search"
					onKeyUp={this.searchHandler}
					type="text"
					placeholder="Search here"
				/>

				<form className="newForm" onSubmit={this.submitForm}>
					<input
						type="text"
						placeholder="Name"
						onChange={event => this.handleInput(event, 'name')}
					/>
					<input
						type="text"
						placeholder="Description"
						onChange={event => this.handleInput(event, 'description')}
					/>
					<input
						type="number"
						placeholder="Price"
						onChange={event => this.handleInput(event, 'value')}
					/>
					<button type="submit">Add</button>
				</form>

				<ExpensesList expenses={this.state.expenses} />
			</div>
		);
	}
}

export default App;
