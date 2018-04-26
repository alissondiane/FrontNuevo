import React from 'react'

class TableHeaderNuevo extends React.Component {

  render() {
    return(
    <thead>
			<tr>      
                <th className="th">SELECCIONAR</th>
                <th className="th">CONCEPTO</th>
                <th className="th">NUMERORECIBO</th>
                <th className="th">DEPENDENCIA</th>
                <th className="th">FECHA</th>
                <th className="th">MONEDA</th>
                <th className="th">IMPORTE</th>
                <th className="th">PROGRAMA</th>
            </tr>
	</thead>
    )
  }
}

export default TableHeaderNuevo