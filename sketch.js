var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var box1_bottom,box2_leftside,box3_rightside;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	boxPosition=width/2-100
 	boxY=610;


	box1_bottom=Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	box2_leftside=Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true});
	box3_rightside=Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true});

	var box1= createSprite(boxPosition+100, boxY+40, 200,20)
      box1.shapeColor="red";

	  var box2= createSprite(boxPosition+200 , boxY, 20,100);
      box2.shapeColor="red";

	  var box3= createSprite(boxPosition, boxY, 20,100)
      box3.shapeColor="red";

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	/*box1= Bodies.rectangle(1200,300,200,100);
     World.add(world,box1);
	 box1.shapeColor=color("red");*/
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
    
  }

	if (keyCode === LEFT_ARROW) {
  
	  helicopterSprite.x=helicopterSprite.x-20;    
	  translation={x:-20,y:0}
	  Matter.Body.translate(packageBody, translation)
  
  
	} else if (keyCode === RIGHT_ARROW) {
	  helicopterSprite.x=helicopterSprite.x+20;
	  translation={x:20,y:0}
	  Matter.Body.translate(packageBody, translation)
	}
	
  }
  




