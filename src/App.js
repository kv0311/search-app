
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import List from './List'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        "Nguyen Lu Khanh Vinh",
        "Nguyen Thanh Huy Phat",
        "Truong Ai Truc",
        "Nguyen Thi Anh Chi",
        "Bui Doan Minh Thu",
        "Pham Thai Ha"
      ],
      filtered: []
    }
  }
  componentDidMount () {
    this.setState({
      filtered: this.state.list
    })
    
  }
  addItem=(e)=> {
    // Prevent button click from submitting form
    e.preventDefault();

    // Create variables for our list, the item to add, and our form
    let list = this.state.list;
    const newItem = document.getElementById("addInput");
    const form = document.getElementById("addItemForm");

    // If our input has a value
    if (newItem.value !== "") {
      // Add the new item to the end of our list array
      list.push(newItem.value);
      // Then we use that to set the state for list
      this.setState({
        list: list
      });
      // Finally, we need to reset the form
      newItem.classList.remove("is-danger");
      form.reset();
    } else {
      // If the input doesn't have a value, make the border red since it's required
      newItem.classList.add("is-danger");
    }
  }
  removeItem=(item)=> {
    let list = this.state.list.slice();
    list = list.filter((el, i) => {
      if (el !== item) {
        return true;
      }
    });
    let filtered = this.state.filtered.slice();
    filtered = filtered.filter((el, i) => {
      if (el !== item) {
        return true;
      }
    });
    debugger
    // Set state to list
    this.setState({
      list:list,
      filtered:filtered
    });
  }
  
  handleChange=(e)=> {
    // Variable to hold the original version of the list
let currentList = [];
    // Variable to hold the filtered list before putting into state
let newList = [];

    // If the search bar isn't empty
if (e !== undefined && e.target.value !== null) {
        // Assign the original list to currentList
  currentList = this.state.list;

        // Use .filter() to determine which items should be displayed
        // based on the search terms
    newList = currentList.filter(item => {

    const lc = item.toLowerCase();

    const filter = e.target.value.toLowerCase();
            // check to see if the current list item includes the search term
            // If it does, it will be added to newList. Using lowercase eliminates
            // issues with capitalization in search terms and search content
     
            return lc.includes(filter);
  });
} else {
        // If the search bar is empty, set newList to original task list
  newList = this.state.list;
}
    // Set the filtered state based on what our rules added to newList
this.setState({
  filtered: newList
});
}
  render() {
    return (
      <div className="content">
        <div className="container">
        <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
          <section className="section">
          <List items={this.state.filtered} delete={this.removeItem} />
          </section>
          <hr />

    <section className="section">
      <form className="form" id="addItemForm">
        <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Something that needs ot be done..."
        />
        <button className="button is-info" onClick={this.addItem}>
          Add Item
        </button>
      </form>
    </section>
        </div>
      </div>
    )
  }
}

export default App;
