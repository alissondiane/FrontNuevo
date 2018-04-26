import React from 'react';
import Select from './Select'

class PagoRowNuevo extends React.Component {
  
  colocar=()=>{
    var hola=document.getElementById(this.props.pago.idRec);
    console.log(hola.id);
    var holas=hola.id;
    this.props.Funciones(holas);
   /*  var selec=[];
   var check=document.getElementsByClassName("checkbox1");
    var normal=Array.from(check);
    for(let i=0; i<normal.length;i++){
      if(normal[i].checked==true){
        selec.push(normal[i].id);
      }
    } 
    console.log(selec);
     */

    

    }
  

  render() {
    return(
    <tr>
      <td className="td">
      <form action="#">
              <label className="row center-xs color_white">
                  <input
                  onClick={this.colocar}
                    className="checkbox1"
                    //name="chekbox"
                    id={this.props.pago.idRec}
                    type="checkbox" />
                    <span> </span>

              </label>
      </form>
     
    </td>
      <td className="td">{this.props.pago.idConcepto.concepA + ' '+ this.props.pago.idConcepto.concepB}</td>
			<td className="td">{this.props.pago.numero}</td>	
      <td className="td">{this.props.pago.idAlum.idFacultad.nombre}</td>
      <td className="td">{this.props.pago.fecha}</td>
      <td className="td">{this.props.pago.moneda}</td>
      <td className="td">{this.props.pago.importe}</td>
      <td className="td"><Select/></td>
	</tr>
    )
  }
}
//<td className="td">{this.props.pago.idRec}</td>
//<td className="td">{this.props.pago.alumno.idAlum}</td>
export default PagoRowNuevo;