import React, { Component } from 'react';
var x = document.cookie;
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: this.props.name};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <p>{this.props.name} bienvenida</p>
          <input type="submit" value="Submit" />
          <h1>{this.state.value}</h1>
        </form>
      );
    }
  }
  export default NameForm;