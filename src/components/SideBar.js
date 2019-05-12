import React, { Component } from 'react';
import '../App.css';


class SideBar extends Component {
    constructor(props) {
        super(props);
        state = {
            active: true
        }
        
    }

    
   

    render() {


        return (

            <nav id="sidebar" className={this.props.openSidebar} style={{ display: 'block' }}>
                <ul className="list-unstyled components">
                    <li className="active">
                        <li>
                            <a id="currentTab" href="#">Personal Tasks</a>
                        </li>
                        <li>
                            <a>Work</a>
                        </li>
                        <li>
                            <a>Projects</a>
                        </li>
                        <li>
                            <a>Shopping List</a>
                        </li>
                        <li>
                            <a>Archive</a>
                        </li>
                    </li>
                </ul>

            </nav>


        );
    }
}
export default SideBar;
