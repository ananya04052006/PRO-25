const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground;
var dustbin1, dustbin2, dustbin3;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200, 550, 70);
	ground = new Ground(400,height,1200,20);
	dustbin = new Dustbin(600, 450, 200, 20);
	dustbin2 = new Dustbin(515, 575, 20, 250);
	dustbin3 = new Dustbin(685, 575, 20, 250);
	ground = new Ground(400, 690, 800, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper1.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed() {
if(keyCode === UP_ARROW) {

	Body.applyForce(paper1.body, paper1.body.position,{x:85, y:-105});
}

}