import React, { Component } from 'react';
import '../App.css';

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: "",
            descript: "",
            dueDate: ""
        }
    }

    deleteTask = () => {

        let request = new XMLHttpRequest();
        let url = "/demo/task/" + this.props.taskId;
        request.open('DELETE', url);
        request.responseType = "json";
        request.onload = () => {
            this.props.loadAllTasks();
        }
        request.send();
    }

    formatDate = (date) => {
        date = new Date(date);
        return date.getDate() + 1 + '-' + date.getMonth() + '-' + date.getFullYear();

    }

    editTask = () => {
        this.setState({
            show: !this.state.show
        })
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
        let nameCheck = this.state.name;
        if (nameCheck === "") {
            nameCheck = this.props.name;
        }
        let descriptCheck = this.state.descript;
        if (descriptCheck === "") {
            descriptCheck = this.props.descript;
        }
        let dueDateCheck = this.state.dueDate;
        if (dueDateCheck === "") {
            dueDateCheck = this.props.dueDate
        }


        let body = {
            name: nameCheck,
            descript: descriptCheck,
            dueDate: dueDateCheck,
            taskId: this.props.taskId,
            openDate: this.props.openDate
        }

        let url = "/demo/task/" + this.props.taskId;
        let postRequest = new XMLHttpRequest();
        postRequest.open('PUT', url);

        let final = JSON.stringify(body);
        postRequest.setRequestHeader('Content-type', 'application/json');
        postRequest.onload = () => {
            this.props.loadAllTasks();
            this.editTask();
        }
        postRequest.send(final);


    }

    render() {
        if (this.state.show === false) {
            return (

                <div className="card">
                    <h5 className="card-header">
                        {this.props.name}
                    </h5>
                    <div id="v">
                        <div id="cardBody" className="card-body">
                            <div id="date">
                                <p>Open Date : {this.formatDate(this.props.openDate)}</p>
                                <p>Due Date : {this.formatDate(this.props.dueDate)}</p>
                                <a id="cardButtons" onClick={this.deleteTask} className="btn btn-primary">Delete</a>
                                <a id="cardButtons" onClick={this.editTask} className="btn btn-primary">Edit</a>
                            </div>
                            <div id="cardContent">
                                <p>Details :</p>
                                <p className="card-text">{this.props.descript}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );

        } else if (this.state.show === true) {
            return (
                <div id="addTaskCard" className="card">
                    <h5 className="card-header">Edit Task</h5>

                    <div className="card-body">
                        <form>
                            <label for="taskTitle">Title</label>
                            <input type="textarea" id="editTask1" onChange={this.onChangeTitle} placeholder={this.props.name} className="form-control" />


                            <label for="taskDescript">Description</label>
                            <input type="textarea" id="editTask2" onChange={this.onChangeDescript} placeholder={this.props.descript} className="form-control" />


                            <label for="taskDescript">Due Date</label>
                            <input id="dateInput" type="date" onChange={this.onChangeDate} placeholder={this.props.dueDate} />

                            <div id="date">
                                <a id="cardButtons" href="#" className="btn btn-primary" onClick={this.onSubmit} >Submit</a>
                                <a id="cardButtons" onClick={this.editTask} class="btn btn-primary">Cancel</a>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }

    }
}



export default Tasks;
