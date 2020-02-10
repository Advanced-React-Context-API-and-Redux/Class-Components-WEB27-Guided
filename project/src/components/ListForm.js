import React from 'react';

class ListForm extends React.Component {
  // Constructor with state
    constructor() {
        super();
        this.state = {
            newItem: ''
        }
    }


  handleChanges = e => {
    // update state with each keystroke
    this.setState({
        newItem: e.target.value
    })
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewItem(this.state.newItem);
    this.setState({ newItem: ''});
  }

  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input 
            type="text" 
            name="newItem" 
            value={this.state.newItem} 
            onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;
