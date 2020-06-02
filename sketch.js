const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ground,paper,bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 570);


	engine = Engine.create();
	world = engine.world;
	
	//Create a Ground
	ground = new Ground(400,550,800,10);
	 
	 paper = new Paper(100,540,50,50);

	 bin1 = new Bin(600,540,130,10);

	 bin2 = new Bin1(535,480,10,130);

	 bin3 = new Bin1(665,480,10,130);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  Engine.update(engine);

  KeyPressed();
  KeyPressed1();
  //KeyPressed2();
  //KeyPressed3();

  paper.display();

  ground.display();
  
 
  bin2.display();
  bin3.display();
  bin1.display();

 

  
  
  drawSprites();
 
}

function KeyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-45});

	}
}

function KeyPressed1(){

	if(keyCode === DOWN_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:45});

	}
}

function KeyPressed2(){

	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:0});
	}
}

function KeyPressed3(){

	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:-45,y:0});
	}

}


