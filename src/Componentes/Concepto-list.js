import React from 'react'
class ConceptoList extends React.Component {
    
    render() { 
      if( this.props.listado.length>0){
      return (
        <p>     
        {
            this.props.listado.map((concepto) => {
              return <label key={concepto.idConcepto} className="row center-xs">
                <input
                className="clase_concepto"
                name={concepto.idConcepto}
                type="checkbox" />

                <span key={concepto.idConcepto} className="mdc-checkbox">
                {concepto.concepA+ '-' +concepto.concepB}
              
                
                </span>
            </label>
            })
          }
          
        </p>
      )}
      else{
        return <p className="text-center">Cargando conceptos</p>
      }
    }
  }
  export default ConceptoList;