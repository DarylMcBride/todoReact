import React, { Component } from 'react';
import '../App.css';

class AddTaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			descript: "",
			openDate: this.getCurrentDate(),
			dueDate: ""
			
		}
	}

	//get current date
	getCurrentDate = () => {
		let openDate = new Date();
		let day = String(openDate.getDate()).padStart(2, '0');
		let month = String(openDate.getMonth() + 1).padStart(2, '0');
		let year = openDate.getFullYear();
		let result = year + '-' + month + '-' + day;
		return result;
	}

	onChangeTitle = (e) => {
		this.setState({
			name: e.target.value
		});
		
	}

	onChangeDescript = (e) => {
		this.setState({
			descript: e.target.value
		});
		
	}

	onChangeDate = (e) => {
		this.setState({
			dueDate: e.target.value
		});
	}

	onSubmit = () => {
		let body = {
			name: this.state.name,
			descript: this.state.descript,
			openDate: this.getCurrentDate(),
			dueDate: this.state.dueDate,
			userId: this.props.verified
		}

		let url = "/demo/task";
		let postRequest = new XMLHttpRequest();
		postRequest.open('POST', url);

		let final = JSON.stringify(body);
		postRequest.setRequestHeader('Content-type', 'application/json');
		console.log(final)
		postRequest.onload= () => {
			this.props.loadAllTasks();
		}

		postRequest.send(final);

	}

	showAddTask = () => {
		let value;
        if (this.props.showAddTask === true) {
            value = 'none'
        } else if (this.state.showAddTask === false) {
            value ='block'
        }
        return value;
    }


	


	render() {
		
		return (
			<div id="addTaskCard" className="card" style={{display: this.showAddTask()}}>
				<h5 className="card-header">Add Task</h5>

				<div className="card-body">
					<form>
						<label htmlFor="taskTitle">Title</label>
						<input type="textarea" id="editTask1" onChange={this.onChangeTitle} className="form-control" />


						<label htmlFor="taskDescript">Description</label>
						<input type="textarea" id="editTask2" onChange={this.onChangeDescript} className="form-control" />


						<label htmlFor="taskDescript">Due Date</label>
						<input id="dateInput" type="date" onChange={this.onChangeDate} />

						<div id="date">
							<a id="cardButtons" href="#" className="btn btn-primary" onClick={this.onSubmit} >Submit</a>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
export default AddTaskForm;




