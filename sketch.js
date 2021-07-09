
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roof;
var b1,b2,b3,b4,b5;
var string1 , string2, string3, string4 ,string5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new ROOF();

	b1 = new BOB(280,300);
	b2 = new BOB(340,300);
	b3 = new BOB(400,300);
	b4 = new BOB(460,300);
	b5 = new BOB(520,300);

	string1 = new CONNECTION(b1.body,{x:280,y:100});
	string2 = new CONNECTION(b2.body,{x:340,y:100});
	string3 = new CONNECTION(b3.body,{x:400,y:100});
	string4 = new CONNECTION(b4.body,{x:460,y:100});
	string5 = new CONNECTION(b5.body,{x:520,y:100});
	


	Engine.run(engine);
  
}


function draw() {
  background(255);

  
  roof.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(b5.body,b5.body.position,{x:150 , y:0 })

	}
};



