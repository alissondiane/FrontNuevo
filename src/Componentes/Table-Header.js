import React from 'react'

class TableHeader extends React.Component {

  render() {
    return(
    <thead>
			<tr>      <th className="th">SELECCIONAR</th>
                
                <th className="th">CONCEPTO</th>
                <th className="th">NUMERORECIBO</th>
                <th className="th">DEPENDENCIA</th>
                <th className="th">FECHA</th>
                <th className="th">MONEDA</th>
                <th className="th">IMPORTE</th>
            </tr>
	</thead>
    )
  }
}

export default TableHeader