import React, { Component } from 'react';
import './App.css';
class List extends Component {
        render() {
            return (
                <div>
                    <ul>
                    {this.props.items.map(item => (
                    <li key={item}>{item} &nbsp;
                    <span className="delete" onClick={() => this.props.delete(item)}>delete</span>
                    </li>))}
                    </ul>
                </div>
            )
        }
}
export default List;