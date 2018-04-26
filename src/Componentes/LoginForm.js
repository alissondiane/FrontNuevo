import React from 'react';
import {browserHistory} from 'react-router-3';
import { Link } from 'react-router-3';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombres : '',
      isValid : false,
      alumnos: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.VistaNueva = this.VistaNueva.bind(this);
  }


  onSubmit=(e)=>{
    
    console.log(this.state.nombres);

    var nombreValidado = this.ValidarNombre(this.state.nombres);
    var nombres = this.state.nombres;
    if(nombreValidado){
        fetch('https://modulo-alumno-zuul.herokuapp.com/modulo-alumno-client/alumno/leer/'+nombres)
            .then((response) => {
            return response.json()
            })
            .then((alumno) => {
              this.setState({ alumnos: alumno})
              console.log(this.state.alumnos)
              if(this.state.alumnos.apeNom == this.state.nombres){
                  console.log("Hola")
                  this.setState({isValid: true})
              }
              if (this.state.isValid) {
                 browserHistory.push('/'+this.state.nombres)
              }else{
                alert("Datos ingresados incorrectamente");
              }

            })
            .catch(error => {
            // si hay algún error lo mostramos en consola
                console.error(error)
            });
        

    }
    e.preventDefault();
    
  }
  VistaNueva=(e)=>{
    
    browserHistory.push('/vista/nueva');
    console.log("llego aca");
    e.preventDefault();
    
  }
  ValidarNombre(nombres){
    if(!nombres){
      alert("Ingrese un nombre");
      return false;
    }else{
      return true;
    }
  }

  onChange(e) {
    this.setState({nombres: e.target.value});
  }

  render() {
    const { nombres, isLoading,isValid } = this.state;

    return (
      <div>
      <div className="vista">
      <div className="grupo">
      <h4 className="center ">Bienvenido</h4>
      <form>
          <div className="center datos">
            <div>
            <i className="material-icons">person</i>
            </div>
            <b>Nombres y Apellidos:</b>
            <div className="center">
            <input type="text" value={this.state.nombres} onChange={this.onChange} />
            </div>
           <button type="submit" onClick={this.onSubmit} className="btn btn-primary btn-lg">CONSULTAR</button>
          </div>
    
      </form>
      </div>
      
      </div>
      <form>
      <button type="submit" onClick={this.VistaNueva} className="btn btn-primary btn-lg">VISTANUEVA</button>
      </form>
      </div>
    );
  }
}

export default LoginForm;