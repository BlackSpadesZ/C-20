var fixedRect , moveRect;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "pink"
  moveRect= createSprite(200, 200, 50, 50);
  moveRect.shapeColor = "purple"
}

function draw() {
  background(255,255,255);  
  moveRect.x = mouseX;
  moveRect.y = mouseY;

  if(moveRect.x-fixedRect.x<fixedRect.width/2 + moveRect.width/2 && 
    fixedRect.x - moveRect.x < fixedRect.width/2 + moveRect.width/2 &&
    moveRect.y - fixedRect.y < fixedRect.height/2 + moveRect.height/2 &&
    fixedRect.y - moveRect.y < fixedRect.height/2 + moveRect.height/2){
    fixedRect.shapeColor = "purple"  
    moveRect.shapeColor = "pink"  
  }else{
    fixedRect.shapeColor = "pink"
    moveRect.shapeColor = "purple"
  }
  drawSprites();
}