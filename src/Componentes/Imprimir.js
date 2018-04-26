import React from 'react'

var jsPDF = require('jspdf');
require('jspdf-autotable');

class Imprimir extends React.Component {
  
  componentDidMount() {

    console.log('PrintThisComponent mounted!')

  }
  CalcularImporte(listado) {
    
    let pagos = listado;
    let importe = 0;
    for (var indice in pagos) {
      importe = importe + pagos[indice].importe;
    }
    return importe;
  }
  Imprimir(){
    console.log(this.props.listado);

    var checkbox_selec=[];
    var checks=[];
    var alumno = this.props.alumno;
    var nombres = alumno.apeNom;
    var codigo= alumno.codigo;
    var importe = 0;
    var listadopagos = this.props.listado;
    var listado = [];
    var total=[];
    var checks=document.getElementsByClassName("checkbox1");
    var checks_normales=Array.from(checks);
    checks_normales.map((checkbox)=>{
     if(checkbox.checked){
       checkbox_selec.push(checkbox.id);
     }
    });
   console.log(checkbox_selec);
   
      for(let j=0;j<listadopagos.length;j++){
        if(listadopagos[j].check==true){
            total.push(listadopagos[j]);
        }
      }

    importe = this.CalcularImporte(total);
   
    console.log(total);


    for (let i = 0; i<total.length; i++) {
      var pago = [total[i].idConcepto.concepA+'-'+total[i].idConcepto.concepB,total[i].numero,total[i].idAlum.idFacultad.nombre,
      total[i].fecha,total[i].moneda,total[i].importe]
      listado.push(pago);
    }
    console.log(listado);
    
    /*
    var pdf = new jsPDF();
    pdf.text(20,20,"Estado de Pagos");
    pdf.text(20,40,listado);
    pdf.save('mipdf.pdf');

 
    //CREAR UN PDF A PARTIR DE UN DIV DEL HTMl
     const pdf = new jsPDF('p', 'mm', 'a4');
     pdf.fromHTML(window.document.getElementById('historial'), 10, 10,{'width': 180});
     pdf.save('test.pdf');
     */


    var columns = ["CONCEPTO","NUMERORECIBO","DEPENDENCIA","FECHA","MONEDA","IMPORTE"];
    
    // Only pt supported (not mm or in)
    var data = "Hola";
    var doc = new jsPDF('p', 'pt');
    
    
    doc.autoTable(columns, listado, {
      styles: {
          cellPadding: 5, // a number, array or object (see margin below)
          fontSize: 8,
          font: "helvetica", // helvetica, times, courier
          lineColor: 200,
          lineWidth: 0,
          fontStyle: 'normal', // normal, bold, italic, bolditalic
          overflow: 'ellipsize', // visible, hidden, ellipsize or linebreak
          fillColor: false, // false for transparent or a color as described below
          textColor: 0,
          halign: 'center', // left, center, right
          valign: 'middle', // top, middle, bottom
          columnWidth: 'auto' // 'auto', 'wrap' or a number
      },
      headerStyles: {fillColor: [26, 82, 118],
      textColor:255,
      fontStyle:'bold'},
      margin: {top: 200},
      addPageContent: function(data) {
        //var logo = new Image();
        //logo.src = 'descarga.jpg';
        //doc.addImage(logo, 'JPEG', 40, 40, 100, 50);
        doc.setFont("arial");
        doc.setFontType("bold");
        doc.setFontSize(25);
        doc.text("Reporte de Pagos", 185, 70);
        doc.setFontSize(19);
        doc.setTextColor(25, 57, 107);
        doc.text("Datos de alumno", 40, 130);
        doc.setFontSize(16);
        doc.text("Alumno : "+nombres, 40, 150);
        doc.text("Codigo: "+codigo,40,170);
        doc.text("Importe: "+importe,40,190);

      }
  });
    //doc.save('EstadoPagosAlumno.pdf');
    var string = doc.output('datauristring');
    var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
    var x = window.open();
    x.document.open();
    x.document.write(iframe);
    x.document.close();
    }
 //<button  onClick={() => window.print()} className=" waves-effect waves-light btn imprimir ">Imprimir<i className="large material-icons left">local_printshop</i></button>
  render() {

    return (
      <div>
        <button  onClick={() => this.Imprimir()} className=" waves-effect waves-light btn imprimir ">Imprimir<i className="large material-icons left">local_printshop</i></button>
      </div>

    )
  }
}
export default Imprimir;
