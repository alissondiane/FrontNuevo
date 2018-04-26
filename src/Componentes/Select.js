import React from 'react'
class Select extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ' '};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      alert("Has elegido:" + event.target.value );
      this.setState({value: event.target.value});
      
    }
  
    render() {
      return (
        <form>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Programa1">Programa1</option>
              <option value="Programa2">Programa2</option>
              <option value="Programa3">Programa3</option>
            </select>
          </label>
        </form>
      );
    }
  }

  export default Select