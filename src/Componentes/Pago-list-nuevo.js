import React from 'react'
import PagoRowNuevo from './Pago-row-nuevo'

class PagoListNuevo extends React.Component {

  render() {
    return (
        <tbody>
          {
            this.props.listado.map((pago) => {
              return <PagoRowNuevo Funciones={this.props.funcion} key={pago.idRec} 
                                  pago={ pago} />
            })
          }
        </tbody>
    )
  }
}

export default PagoListNuevo