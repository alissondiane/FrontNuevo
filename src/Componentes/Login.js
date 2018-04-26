import React, { Component } from 'react';
import {Link } from 'react-router-3'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
    isLoggedIn :true};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validado = true;
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      const boton = isLoggedIn ? (
        <Link className="waves-effect waves-light btn botonazul2 "to={'/'+this.state.value }><button type="submit">CONSULTAR</button></Link>
      ) : (
        <h1>HolaMundo</h1>
      );
        
      
      return (

        <div className="vista">
        <div className="grupo">
        <h4 className="center ">Bienvenido</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="center datos">
            <div>
            <i class="material-icons">person</i>
            </div>
            <b>Nombres y Apellidos:</b>
            <div className="center">
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
            {boton}
           
          </div>
        </form>
        </div>
      
      
        
        </div>
      );
    }
  }
  export default Login;

    