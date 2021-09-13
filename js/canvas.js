var canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const imagen = new Image();
imagen.onload = function(){
    ctx.drawImage(imagen, 0, 0,207,339);
}
imagen.src="img/carnetAlfrente(1).svg";
 
function descargarCanva() {
    let image = canvas.toDataURL("image/SVG");
    let width=canvas.width;
    let height=canvas.height;
    if(width > height){
      pdf = new jsPDF('l', 'px', [width, height]);
    }
    else{
      pdf = new jsPDF('p', 'px', [height, width]);
    }
    pdf.addImage(image,'SVG',0,0,width,height);
    pdf.save("carnet.pdf");
  }