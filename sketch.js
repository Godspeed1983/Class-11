//Variable Declaration
var trex,trex_running;
var edges,ground,ground_background;

//1.Load Image/animation/sound
//2.add Image/animation/sound
function preload(){
  
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_background=loadImage("ground2.png")
}

//create
function setup(){
  createCanvas(600,200)
 
  
  //create a trex sprite
  trex=createSprite(50,150,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;

  edges=createEdgeSprites();

  ground=createSprite(200,180,400,20);
  ground.addImage("background",ground_background);
}

function draw(){
  background("white");

  //Make trex go up
  if(keyDown("space")){
    trex.velocityY=-10
  }

  //add gravity
  trex.velocityY=trex.velocityY+0.5;

  trex.collide(ground);


  
  drawSprites();
}
