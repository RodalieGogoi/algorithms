
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  
  
  fixedRect = createSprite(400, 200, 30, 80);
  movingRect = createSprite(100, 100, 80, 30);

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;


  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x <  movingRect.width/2 + fixedRect.width/2
    &&  movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y <  movingRect.height/2 + fixedRect.height/2 ){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "blue";
  }


  drawSprites();
}