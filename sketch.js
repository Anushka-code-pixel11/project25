
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var bin1,bin2,bin3;
var ground;
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;
  ball = new Paper(100,100,70);
  bin1 = new Dustbin(575,540,250,250);
  bin2 = new Dustbin1(475,530,20,220);
  bin3 = new Dustbin1(675,530,20,220);
  ground = new Ground();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  ball.display();
  bin1.display();
  ground.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:120,y:-120});
  }
}
