
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;

var bob1, bob2, bob3, bob4, bob5, roof1;
var rope1, rope2, rope3, rope4, rope5;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	bob1 = new Bob(200,500);
	bob2 = new Bob(300,500);
	bob3 = new Bob(400,500);
	bob4 = new Bob(500,500);
	bob5 = new Bob(600,500);
	roof1 = new Roof();
	rope1 = new Rope(bob1.body,roof1.body,-200,0);
	rope2 = new Rope(bob2.body,roof1.body,-200,0);
	rope3 = new Rope(bob3.body,roof1.body,-200,0);
	rope4 = new Rope(bob4.body,roof1.body,-200,0);
	rope5 = new Rope(bob5.body,roof1.body,-200,0);
	
  
}


function draw() {
	Engine.update(engine);
	background(255);
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	roof1.display();
}



