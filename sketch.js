// Progamação feita por Carla Vasconcelos aula 20
//variaveis global
var retFixo, retMovimento;

function setup() {
  createCanvas(1200,800);
  //criação da sprite de um retângulo fixo
  retFixo = createSprite (600, 400, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;

  //criação da sprite de un retângulo que se move
  retMovimento = createSprite (400, 200, 80, 30);
  retMovimento.shapeColor = "green";
  retMovimento.debug = true;
  
}

function draw() {
  background(0);
  retMovimento.x = World.mouseX;
  retMovimento.y = World.mouseY;
  if (retMovimento.x - retFixo.x === retFixo.width/2 + retMovimento.width/2){
    retMovimento.shapeColor = "red";
    retFixo.shapeColor = "red";
  }
  else{
    retMovimento.shapeColor = "green"; 
    retFixo.shapeColor = "green";
  }
  
  






  drawSprites();
}

