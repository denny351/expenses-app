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
		total: 0
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
      this.setState({
				formdata: {
					name: '',
					description: '',
					value: null
				}
			});
			this.getAllExpenses();
		});
  };

	render() {
		return <div className="appContainer">
				<h1>Expense Tracker</h1>
				<h4>Total value so far: ${this.state.total.toFixed(2)}</h4>
				<input className="search" onKeyUp={this.searchHandler} type="text" placeholder="Search for an expense" />

				<p style={{ margin: 0 }}>Add a new expense</p>
				<form className="newForm" onSubmit={this.submitForm}>
					<input type="text" className="nameInput" placeholder="Name" value={this.state.formdata.name} onChange={event => this.handleFormInput(event, 'name')} required />
					<input type="text" className="descriptionInput" placeholder="Description" value={this.state.formdata.description} onChange={event => this.handleFormInput(event, 'description')} />
					<input type="number" step="0.01" className="numberInput" placeholder="Price" value={this.state.formdata.value} onChange={event => this.handleFormInput(event, 'value')} required />
					<span>
						<button type="submit">Add</button>
					</span>
				</form>

				<ExpensesList expenses={this.state.expenses} getAll={this.getAllExpenses} />
			</div>;
	}
}

export default App;
