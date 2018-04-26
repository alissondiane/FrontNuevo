import React from 'react'
import PagoRow from './Pago-row'

class PagoList extends React.Component {

  render() {
    return (
        <tbody>
          {
            this.props.listado.map((pago) => {
              return <PagoRow Funciones={this.props.funcion} key={pago.idRec} 
                                  pago={ pago} />
            })
          }
        </tbody>
    )
  }
}

export default PagoList