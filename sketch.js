const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,700,480,20);

  for (var k = 0; k <=innerWidth; k = k +80) {
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }

  for (var k=40;k<=width;k=k+50) {
    plinkos.push(new Plinko(k,75,10))
  }

  for (var k=15;k<=width-10;k=k+50) {
    plinkos.push(new Plinko(k,150,10))
  }

  for (var k=40;k<=width;k=k+50) {
    plinkos.push(new Plinko(k,225,10))
  }

  for (var k=15;k<=width-10;k=k+50) {
    plinkos.push(new Plinko(k,300,10))
  }

}



function draw() {
  background("black"); 
  Engine.update(engine);
  
  for (var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  if(frameCount%90===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }

  for (var k=0;k<particles.length;k++) {
    particles[k].display();
  }

  for (var k=0;k<plinkos.length;k++) {
    plinkos[k].display();
  }
  for (var k=0;k<plinkos.length;k++) {
    plinkos[k].display();
  }
  for (var k=0;k<plinkos.length;k++) {
    plinkos[k].display();
  }
  for (var k=0;k<plinkos.length;k++) {
    plinkos[k].display();
  }

  ground.display();


}