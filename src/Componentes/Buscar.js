import React from 'react'

class Buscar extends React.Component {
  addNewFiltro(e) {
    e.preventDefault();
    var nombre = this.nombre.value;
    this.props.Nombre( nombre);
}  
 
  render() {
    return(
      <form onSubmit={(e) => this.addNewFiltro(e)}>
        <label>Nombre:</label>
        <input ref={ ( input ) => this.nombre = input } type="text" placeholder="Nombre" />
        <button type="submit">Buscar</button>
      </form>
    )
  }
}

export default Buscar