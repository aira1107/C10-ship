var sea, seaImg;
var ship, shipImg1;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png", "ship-2.png","ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(600,400);
 
  sea = createSprite(400,200);
  sea.addImage("sea", seaImg);
  sea.scale = 0.3;
  sea.velocityX = -2;

  ship = createSprite(200,200,20,50);
  ship.addAnimation("ship",shipImg1);
  ship.scale = 0.2;
} 

function draw() {

  if(sea.x < 0) {
    sea.x = sea.width/2;
  }
  background("blue");
  drawSprites();
} 

