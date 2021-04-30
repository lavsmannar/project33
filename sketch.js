var snowflake,snowflakeImg;
var bg;

function preload(){
  bg=loadImage('snow2.jpg');
  snowflakeImg=loadImage('snow4.webp');
}

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(bg);
  drawSprites();
  spawnFlakes();
}
function spawnFlakes(){
  if(frameCount%1000){
    snowflake=createSprite(random(20,780),-20,15,15);
    snowflake.addImage(snowflakeImg);
    snowflake.velocityY=2;
    snowflake.lifetime=5000;
    snowflake.scale=0.3;
  }
}