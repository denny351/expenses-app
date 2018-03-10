import React from 'react';
import axios from 'axios';
import moment from 'moment';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

class expensesList extends React.Component {
	deleteItem = id => {
		axios.delete(`/api/expenses/${id}`).then(() => {
			this.props.getAll();
		});
	};

	render() {
		const mapExpenses = this.props.expenses.map(item => {
      let id = item.id;
      let date = moment(item.created_at).format('MMM Do YY');

			return <CSSTransition timeout={400} classNames="fade" key={id}>
					<div className="expenseItem">
						<div className="expenseItemHead">
							<span>
								<strong>Name: </strong>
								{item.name}
							</span>
							<span style={{ marginLeft: 10 }}>
								<strong>Price: $</strong>
								{item.value.toFixed(2)}
							</span>
							<span style={{ float: 'right' }}>{date}</span>
						</div>
						<div className="expenseDescription">
							{item.description}
							<span style={{ float: 'right' }}>
								<button onClick={() => this.deleteItem(id)}>
									Delete
								</button>
							</span>
						</div>
					</div>
				</CSSTransition>;
		});

		return (
			<div>
				<TransitionGroup>{mapExpenses}</TransitionGroup>
			</div>
		);
	}
}

export default expensesList;
