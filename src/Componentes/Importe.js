import React from 'react'

class Importe extends React.Component {
     render() {
      return(
        <div className="row ">
          <b className="importe">TOTAL:</b>
          <input value={'S/. '+ this.props.importe} type="text" placeholder="Importe" className="derecha col-xs-3"/>
        </div>
      )
    }   
}
export default Importe;
