var tablero = document.getElementById("planeta");
var lapiz = tablero.getContext("2d");
var x = 300;
var y = 250;
var rotacion = 0

function imagenes(){
  fotoPlaneta = new Image()
  fotoPlaneta.src = "https://docs.google.com/uc?id=1kmT5R5MaRBD9cXcrAc6UtSgCslJLnvZT"
  fotoPlaneta.onload = dibujarPlaneta;

  rover = new Image();
  rover.src = "https://docs.google.com/uc?id=11MkVDY9DGh6OPAMrn4kaCswwZx4WI87K"
  rover.onload = dibujarRover;

}
function dibujarPlaneta(){
    lapiz.drawImage(fotoPlaneta, 0, 0, 600, 500)
}
function dibujarRover(){
    lapiz.save()
    lapiz.translate(x+50, y+40,)
    lapiz.rotate(rotacion*Math.PI/180)
    lapiz.translate(x-50, y-40,)
    lapiz.drawImage(rover, x, y, 100, 80)
    console.log("x:"+x+" y:"+y)
    lapiz.restore()
}

window.addEventListener("keydown", mover)

function mover(tecla){
console.log(tecla)
codigo = tecla.keyCode
if(codigo=="39" && x<500){
    x = x + 10;
    rotacion = 0;
    dibujarPlaneta();
    dibujarRover(); 
}
if(codigo=="37" && x>0){
    x = x - 10;
    rotacion = 180;
    dibujarPlaneta();
    dibujarRover(); 
}
if(codigo=="38" && y>0){
    y = y - 10;
    rotacion = 270;
    dibujarPlaneta();
    dibujarRover(); 
}
if(codigo=="40" && y<420){
    y = y + 10;
    rotacion = 90;
    dibujarPlaneta();
    dibujarRover(); 
}

}












