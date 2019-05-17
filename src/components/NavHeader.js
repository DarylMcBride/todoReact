import React, { Component } from 'react';
import '../App.css';
import Sidebars from './Sidebars.js';
import LoginForm from './LoginForm.js';
import AddTaskForm from './AddTaskForm.js';
import Tasks from './Tasks.js';
import CreateAccountForm from './CreateAccountForm';



class NavHeader extends Component {

    constructor(props) {
        super(props);
        this.onVerified = this.onVerified.bind(this);
        this.state = {
            tasks: [],
            show: false,
            showAddTask: false,
            verfied: []
        }
    }

    loadAllTasks = () => {
        let data;
        let url = "/demo/task/user/" +this.state.verfied.userId;

        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = "json";

        request.onload = () => {
            data = request.response;
            console.log(data);
            this.setState({
                tasks: data
            });
            console.log(data);
        }

        request.send();
    }

    openSidebar = () => {
        this.setState({
            show: !this.state.show
        })
    }

    openAddTask = () => {
        this.setState({
            showAddTask: !this.state.showAddTask
        })
    }

    onVerified(verfication) {
        this.setState({
            verfied: verfication
        })
        console.log(this.state.verfied)
        this.loadAllTasks();
    }

    logout = () => {
        this.setState({
            verfied: []
        })
        console.log(this.state.verified)
       
    }


    render() {
        if (this.state.verfied.userId != null) {
            
           
            return (

                <div className="App">

                    <nav id="nav-header" className="navbar">
                        <div id="buttonContainer">
                            <button id="menuButton" type="button" className="btn btn-info" onClick={this.openSidebar}>Menu</button>
                            <button id="addTaskButton" type="button" className="btn btn-info" onClick={this.openAddTask}>Add Task</button>
                        </div>

                        <a id="webTitle" className="navbar-brand" href="#">Welcome {this.state.verfied.username}</a>
                        <button type="button" id="logoutButton" className="btn btn-primary" onClick={this.logout}>Logout</button>
                    </nav>

                    <div id="spacer">
                    </div>
                    <div id="sidebarWrap" className="wrapper">
                        <Sidebars show={this.state.show} />
                        <div id="mainContent">
                           
                            <LoginForm onVerified={this.onVerified} />
                            <AddTaskForm showAddTask={this.state.showAddTask} loadAllTasks={this.loadAllTasks} verified={this.state.verfied.userId} />

                            {this.state.tasks.map((task) => <Tasks loadAllTasks={this.loadAllTasks} taskId={task.taskId} name={task.name} descript={task.descript}
                                openDate={task.openDate} dueDate={task.dueDate} userId={task.userId} verifiedUserId={this.state.verfied.userId} />)}
                        </div>
                    </div>

                </div>
            );
        } else {
           // this.loadAllTasks();
   
            return (

                <div className="App">

                    <nav id="nav-header" className="navbar">
                        <div id="buttonContainer">
                            <button id="menuButton" type="button" className="btn btn-info" onClick={this.openSidebar}>Menu</button>
                            
                        </div>

                        <a id="webTitle" className="navbar-brand" href="#">ToDoList</a>
                        <div> 
                        <button type="button" id="createAccountButton" data-toggle="modal" data-target="#CreateAccountForm" className="btn btn-primary">Create Account</button>
                        <button type="button" id="loginButton" className="btn btn-primary" data-toggle="modal" data-target="#loginForm">Login</button>
                        </div>
                    </nav>

                    <div id="spacer">
                    </div>
                    <div id="sidebarWrap" className="wrapper">
                        <Sidebars show={this.state.show} />
                        <div id="mainContent">
                            <CreateAccountForm />
                            <LoginForm onVerified={this.onVerified} />
                           
                        </div>
                    </div>

                </div>
            );
        }


    }

}




export default NavHeader;
