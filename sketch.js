
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var treee,ground;

function preload()
{
	
}

function setup() {
createCanvas(500, 500);
engine = Engine.create();
world = engine.world;
treee=new Tree(400,450);
ground=new Ground(250,460,500,10);

	Engine.run(engine);
  
}


function draw() {
Engine.run(engine);
rectMode(CENTER);
background(0);
treee.display();
ground.display();
 
}



