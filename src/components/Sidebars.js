import React, { Component } from 'react';
import '../App.css';


class Sidebars extends Component {

    showSide = () => {
        let value;
        if (this.props.show === true) {
            value = 'none'
        } else if (this.props.show === false) {
            value ='block'
        }
        return value;
    }

    render() {


        return (

            <nav id="sidebar" style={{display: this.showSide()}}>
                <ul className="list-unstyled components">
                    <li className="active">
                        <li>
                            <a id="currentTab" href="#">Personal Tasks</a>
                        </li>
                        <li>
                            <a href="#">Work</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Shopping List</a>
                        </li>
                        <li>
                            <a href="#">Archive</a>
                        </li>
                    </li>
                </ul>

            </nav>


        );
    }
}


export default Sidebars;

